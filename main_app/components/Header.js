import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT} from '../theme/text';

const Header = ({img1, title, img2, onPressBack, onPressIcon, theme}) => {
  return (
    <View style={styles.container}>
      {/* BAck  */}
      <TouchableOpacity onPress={onPressBack}>
        <Image source={img1} />
      </TouchableOpacity>
      {/* Title  */}
      <Text style={TEXT.text2}>{title}</Text>
      {/* Icon  */}
      <TouchableOpacity onPress={onPressIcon}>
        <Image source={img2} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
