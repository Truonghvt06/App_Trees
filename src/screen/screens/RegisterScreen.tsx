import {
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Linking,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
// import TextInputcpn, {TextInputPass} from '../components/TextInputcpn';
import Buttoncpn from '../components/Buttoncpn';
import GoogleFacebook from '../components/GoogleFacebook';
import {TEXT} from '../../theme/text';
import {COLOR} from '../../theme/color';
import TextInputcpn from '../components/TextInputcpn';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import {addUserAPI} from '../../redux/action/userAction';
import {IUserStyle} from '../../redux/reducer/userReducer';

interface IEroror {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
}
const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<IEroror>({});
  const [showPass, setShowPass] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const listUser = useAppSelected(state => state.user.listUser);

  const dispatch = useAppDispatch();

  const openGG = () => {
    Linking.openURL('https://www.google.com.vn/?hl=vi');
  };

  const openYT = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //Kiểm tra mail tồn tại
  const checkMail = listUser.some(mail => mail.email === email);

  const validateFields = () => {
    const newErrors: IEroror = {};
    if (!name) newErrors.name = 'Vui lòng nhập họ tên!';
    if (!email) {
      newErrors.email = 'Vui lòng nhập email!';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email không hợp lệ!';
    } else if (checkMail) {
      newErrors.email = 'Email đã tồn tại!';
    }
    if (!phone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại!';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Số điện thoại phải có 10 chữ số!';
    }
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu!';
    } else if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateFields()) {
      // Alert.alert('Đăng ký thành công!');
      const dataAdd: IUserStyle = {
        name,
        email,
        phone_number: phone,
        password,
        address: '',
        avatar: '',
      };
      dispatch(addUserAPI(dataAdd))
        .then(() => {
          ToastAndroid.show('Đăng ký thành công!', ToastAndroid.SHORT),
            setName('');
          setEmail('');
          setPhone('');
          setPassword('');

          navigation.navigate('Login');
        })
        .catch(err => console.log('Đăng ký thất bại!', err));
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../../asset/images/ellipse1.png')}
          style={styles.imgEll}
        />
        <View style={styles.block}>
          <Text style={[TEXT.text, {textAlign: 'center'}]}>
            Đăng ký tài khoản
          </Text>
          <Text style={[TEXT.text2, {textAlign: 'center', marginBottom: 20}]}>
            Tạo tài khoản
          </Text>

          <TextInputcpn
            value={name}
            placeholder="Họ tên"
            isFocused={focusedInput === 'name'}
            onFocus={() => setFocusedInput('name')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setName(text);
              setErrors(prevErrors => ({...prevErrors, name: ''}));
            }}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInputcpn
            value={email}
            placeholder="E-mail"
            isFocused={focusedInput === 'email'}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setEmail(text);
              setErrors(prevErrors => ({...prevErrors, email: ''}));
            }}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInputcpn
            value={phone}
            placeholder="Số điện thoại"
            keyboardType="numeric"
            isFocused={focusedInput === 'phone'}
            onFocus={() => setFocusedInput('phone')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setPhone(text);
              setErrors(prevErrors => ({...prevErrors, phone: ''}));
            }}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          <TextInputcpn
            value={password}
            placeholder="Mật khẩu"
            isFocused={focusedInput === 'pass'}
            onFocus={() => setFocusedInput('pass')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={(text: string) => {
              setPassword(text);
              setErrors(prevErrors => ({...prevErrors, password: ''}));
            }}
            hien={require('../../../asset/images/filled.png')}
            an={require('../../../asset/images/eye.png')}
            secureTextEntry={!showPass}
            showPass={showPass}
            onPressShow={() => setShowPass(!showPass)}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <View style={styles.content1}>
            <Text style={[TEXT.text3, {textAlign: 'center'}]}>
              <Text>Để đăng ký tài khoản, bạn đồng ý </Text>
              <Text style={{color: COLOR.green}} onPress={openGG}>
                Terms & Conditions
              </Text>
              <Text> and </Text>
              <Text style={{color: COLOR.green}} onPress={openYT}>
                Privacy policy
              </Text>
            </Text>
          </View>

          <Buttoncpn title="Đăng ký" onPress={handleRegister} />

          <GoogleFacebook
            title="Tôi đã có tài khoản? "
            text_btn="Đăng nhập"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  block: {
    paddingHorizontal: 30,
  },
  content1: {
    marginTop: 7,
    paddingHorizontal: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  imgEll: {
    width: '100%',
    height: 204,
  },
  errorText: {
    color: COLOR.red,
    fontSize: 11,
    marginLeft: 5,
  },
});
