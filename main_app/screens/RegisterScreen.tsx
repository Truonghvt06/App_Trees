import {
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextInputcpn, {TextInputPass} from '../components/TextInputcpn';
import {TEXT} from '../theme/text';
import Buttoncpn from '../components/Buttoncpn';
import GoogleFacebook from '../components/GoogleFacebook';
import {COLOR} from '../theme/color';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [focusedInput, setFocusedInput] = useState(null);

  const openGG = () => {
    Linking.openURL('https://www.google.com.vn/?hl=vi');
  };

  const openYT = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const validateFields = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Vui lòng nhập họ tên!';
    if (!email) newErrors.email = 'Vui lòng nhập email!';
    if (!phone) newErrors.phone = 'Vui lòng nhập số điện thoại!';
    if (!password) newErrors.password = 'Vui lòng nhập mật khẩu!';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateFields()) {
      Alert.alert('Đăng ký thành công!');
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../asset/images/ellipse1.png')}
          style={styles.imgEll}
        />
        <View style={styles.block}>
          <Text style={[TEXT.text, {textAlign: 'center'}]}>Đăng ký mới</Text>
          <Text style={[TEXT.text2, {textAlign: 'center', marginBottom: 20}]}>
            Tạo tài khoản
          </Text>

          <TextInputcpn
            value={name}
            placeholder="Họ tên"
            isFocused={focusedInput === 'name'}
            onFocus={() => setFocusedInput('name')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={text => {
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
            onChangeText={text => {
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
            onChangeText={text => {
              setPhone(text);
              setErrors(prevErrors => ({...prevErrors, phone: ''}));
            }}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          <TextInputPass
            value={password}
            placeholder="Mật khẩu"
            isFocused={focusedInput === 'pass'}
            onFocus={() => setFocusedInput('pass')}
            onBlur={() => setFocusedInput(null)}
            onChangeText={text => {
              setPassword(text);
              setErrors(prevErrors => ({...prevErrors, password: ''}));
            }}
            hien={require('../../asset/images/filled.png')}
            an={require('../../asset/images/eye.png')}
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
