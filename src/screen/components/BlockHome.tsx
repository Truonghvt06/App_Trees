import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT} from '../../theme/text';

interface IBlock {
  title?: string;
  children?: React.ReactNode;
  see_more?: string;
  onPress?: () => void;
  style?: any;
}

const BlockHome = ({title, children, see_more, onPress, style}: IBlock) => {
  return (
    <View style={styles.container}>
      {title && <Text style={[TEXT.text_24, style]}>{title}</Text>}
      <View style={[styles.content, style]}>{children}</View>
      <TouchableOpacity style={styles.view_xt} onPress={onPress}>
        <Text style={[TEXT.text_16, styles.text_xt]}>{see_more}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlockHome;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  content: {
    paddingTop: 20,
  },
  view_xt: {
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  text_xt: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
