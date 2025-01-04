import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../../theme/color';

const Info = (props: any) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.size}>{props.title}</Text>
        <Text style={[styles.size, props?.style]}>{props.info}</Text>
      </View>
      <View style={{backgroundColor: COLOR.gray, height: 1}} />
    </>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  size: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
});
