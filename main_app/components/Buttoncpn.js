import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import {TEXT} from '../theme/text';

/**
 * title: Tên nút
 *
 * onPress: Su kien nut
 * @param {title, onPress} param0
 * @returns
 */
const Buttoncpn = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <LinearGradient
          colors={['rgba(0,117,55,1)', 'rgba(76,175,80, 1)']} // Thêm gradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
          <Text style={[TEXT.text1, {color: 'white', textAlign: 'center'}]}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Buttoncpn;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  btn: {
    borderRadius: 15,
    overflow: 'hidden', // Đảm bảo gradient bo tròn theo nút
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 15,
  },
});
