import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TEXT} from '../../theme/text';
import {COLOR} from '../../theme/color';

/**
 *title: Bạn k có tài khoản
 *
 * text_btn: tên nút
 *
 * onPress: nút chuyển sang Đăng ký
 * @param {title, text_btn, onPress}
 * @returns
 */

interface IGG {
  title: string;
  text_btn: string;
  onPress: () => void;
}
const GoogleFacebook = ({title, text_btn, onPress}: IGG) => {
  return (
    <View style={styles.container}>
      {/* HOAC  */}
      <View style={styles.hoac}>
        <View style={styles.ke} />
        <Text style={[TEXT.text3]}>Hoặc</Text>
        <View style={styles.ke} />
      </View>
      {/* GG - FB  */}
      <View style={styles.view_gg_fb}>
        <TouchableOpacity onPress={() => Alert.alert('Google')}>
          <Image
            style={styles.img}
            source={require('../../../asset/images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
          <Image
            style={styles.img}
            source={require('../../../asset/images/facebook.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Tao TK  */}
      <View style={styles.view_text_btn}>
        <Text style={TEXT.text3}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[TEXT.text3, {color: COLOR.green, fontWeight: 'bold'}]}>
            {text_btn}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoogleFacebook;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  hoac: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ke: {
    height: 1.1,
    width: '42%',
    backgroundColor: COLOR.green,
  },
  view_gg_fb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  view_text_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
