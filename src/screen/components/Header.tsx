import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT} from '../../theme/text';

interface IHeader {
  img1: any;
  title: string;
  img2?: any;
  onPressBack: () => void;
  onPressIcon?: () => void;
  style?: any;
}

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      {/* BAck  */}
      <TouchableOpacity onPress={props.onPressBack}>
        <Image source={props.img1} />
      </TouchableOpacity>
      {/* Title  */}
      <Text style={[TEXT.text2, {textAlign: 'center', flex: 1}]}>
        {props.title}
      </Text>
      {/* Icon  */}
      {props.img2 && props.onPressIcon && (
        <TouchableOpacity onPress={props.onPressIcon}>
          <Image source={props.img2} />
        </TouchableOpacity>
      )}
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
