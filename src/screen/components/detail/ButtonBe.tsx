import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../../theme/color';

const ButtonBe = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default ButtonBe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.green3,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});
