import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import TextInputcpn, {TextInputPass} from '../components/TextInputcpn';
import {TEXT} from '../theme/text';
import Buttoncpn from '../components/Buttoncpn';
import Gg_Fb from '../components/GoogleFacebook';
import {COLOR} from '../theme/color';
import GoogleFacebook from '../components/GoogleFacebook';

// const {width: screenWidth} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [error, setError] = useState('');

  const handLogin = () => {
    // setError('');

    if (!email || !password) {
      setError('Vui lòng điền đầy đủ email và mật khẩu !');
    } else {
      Alert.alert('Đăng nhập thành công!');
      navigation.navigate('BottomTab');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../asset/images/ellipse.png')}
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
          onChangeText={text => {
            setEmail(text);
            setError('');
          }}
        />
        <TextInputPass
          value={password}
          placeholder="Mật khẩu"
          hien={require('../../asset/images/filled.png')}
          an={require('../../asset/images/eye.png')}
          isFocused={focusedInput === 'password'}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
          onChangeText={text => {
            setPassword(text);
            setError('');
          }}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* NHO TAI KHOAN FORGOT  */}
        <View style={styles.content1}>
          <View style={styles.content1_checkbox}>
            <TouchableOpacity onPress={() => setIsCheckBox(!isCheckBox)}>
              <Image
                source={
                  isCheckBox
                    ? require('../../asset/images/checkbox.png')
                    : require('../../asset/images/un_checkbox.png')
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
        <Buttoncpn title="Đăng nhập" onPress={handLogin} />
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
