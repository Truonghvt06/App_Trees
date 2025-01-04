import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Buttoncpn from '../components/Buttoncpn';
import GoogleFacebook from '../components/GoogleFacebook';
import {TEXT} from '../../theme/text';
import {COLOR} from '../../theme/color';
import TextInputcpn from '../components/TextInputcpn';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchUsser} from '../../redux/action/userAction';

// const {width: screenWidth} = Dimensions.get('window');

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [focusedInput, setFocusedInput] = useState<any>(null);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const listUser = useAppSelected(state => state.user.listUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsser());
  }, [dispatch]);

  const handLogin = async () => {
    const user = listUser.find(
      user =>
        (user.email === email || user.phone_number === email) &&
        user.password === password,
    );
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ email và mật khẩu !');
    } else if (!user) {
      setError('Tên đăng nhập hoặc mật khẩu không chính xác!');
    } else {
      try {
        const userStorage = {
          id: user.id,
          name: user.name,
          email: user.email,
          phone_number: user.phone_number,
          avatar: user.avatar,
          password: user.password,
          address: user.address,
        };
        // LƯU VÀO STORAGE
        // chuyển sang json
        const data = JSON.stringify(userStorage);
        await AsyncStorage.setItem('userLogin', data);

        // Check box ghi nhớ mật khẩu

        if (isCheckBox) {
          await AsyncStorage.setItem('checkBox', 'true');
        } else {
          await AsyncStorage.setItem('checkBox', 'false');
        }

        //
        ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
        navigation.navigate('BottomTab');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.log('Lỗi đăng nhập!', error);
      }
    }
  };

  // Lấy dữ liệu từ storage đổ vào Tên đăng nhập và mật khẩu
  useEffect(() => {
    const loadData = async () => {
      try {
        const dataUser = await AsyncStorage.getItem('userLogin');
        const checkData = await AsyncStorage.getItem('checkBox');

        if (dataUser && checkData === 'true') {
          const {email, password, phone_number} = JSON.parse(dataUser);
          setEmail(email || phone_number);
          setPassword(password);
          setIsCheckBox(true);
          navigation.navigate('BottomTab');
        }
      } catch (error) {
        console.log('Lỗi! Không lấy được thông tin từ storage!');
      }
    };
    loadData();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require('../../../asset/images/ellipse.png')}
          style={styles.imgEll}
        />
        <View style={styles.block}>
          {/* CHÀO  */}
          <Text style={[TEXT.text, {textAlign: 'center'}]}>Chào mừng bạn</Text>
          <Text style={[TEXT.text2, {textAlign: 'center', marginBottom: 20}]}>
            Đăng nhập tài khoản
          </Text>

          {/* EMAIL, PASS  */}
          <TextInputcpn
            value={email}
            placeholder="Nhập email hoặc số điện thoại"
            isFocused={focusedInput === 'email'}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setEmail(text);
              setError('');
            }}
          />
          <TextInputcpn
            value={password}
            placeholder="Mật khẩu"
            hien={require('../../../asset/images/filled.png')}
            an={require('../../../asset/images/eye.png')}
            // secureTextEntry={true}
            isFocused={focusedInput === 'password'}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setPassword(text);
              setError('');
            }}
            secureTextEntry={!showPass}
            showPass={showPass}
            onPressShow={() => setShowPass(!showPass)}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* NHO TAI KHOAN FORGOT  */}
          <View style={styles.content1}>
            <View style={styles.content1_checkbox}>
              <TouchableOpacity onPress={() => setIsCheckBox(!isCheckBox)}>
                <Image
                  source={
                    isCheckBox
                      ? require('../../../asset/images/checkbox.png')
                      : require('../../../asset/images/un_checkbox.png')
                  }
                />
              </TouchableOpacity>
              <Text style={[TEXT.text3, {color: COLOR.gray, marginLeft: 5}]}>
                Nhớ tài khoản
              </Text>
            </View>
            <View style={styles.content1_forgot}>
              <TouchableOpacity>
                <Text style={[TEXT.text3, {color: COLOR.green}]}>
                  Forgot Password ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* BTN DANG NHAP  */}
          <Buttoncpn title="Đăng nhập" onPress={() => handLogin()} />
          {/* HOẶC  */}
          <GoogleFacebook
            title="Bạn không có tài khoản? "
            text_btn="Tạo tài khoản"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  block: {
    paddingHorizontal: 30,
  },
  content1: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 25,
  },
  content1_checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content1_forgot: {
    flex: 1,
    alignItems: 'flex-end',
  },
  imgEll: {
    // width: screenWidth,
    // height: 330,
  },
  errorText: {
    color: COLOR.red,
    fontSize: 11,
    marginLeft: 5,
  },
});
