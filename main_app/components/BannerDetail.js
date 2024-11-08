import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

const BannerDetail = ({back_left, back_right, img}) => {
  return (
    <ImageBackground style={styles.container} source={img}>
      <TouchableOpacity style={styles.back_left}>
        <Image source={back_left} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back_right}>
        <Image source={back_right} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default BannerDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 270,
    backgroundColor: COLOR.gray1,
  },
  back_left: {
    position: 'absolute',
    left: 20,
    top: 130,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  back_right: {
    position: 'absolute',
    right: 20,
    top: 130,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
