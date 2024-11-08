import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT} from '../theme/text';
import {COLOR} from '../theme/color';

const BlockHome = ({title, children, see_more, onPress, style}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={[TEXT.text_24, style]}>{title}</Text>}
      <View style={[styles.content, style]}>{children}</View>
      <TouchableOpacity style={styles.view_xt} onPress={onPress}>
        <Text style={[TEXT.text_16, styles.text_xt]}>{see_more}</Text>
        <View
          style={{
            height: 1,
            width: 147,
            backgroundColor: COLOR.black,
          }}
        />
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
  },
});
