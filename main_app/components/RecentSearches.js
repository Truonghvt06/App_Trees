import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TEXT} from '../theme/text';

const RecentSearches = ({img1, title, img2, theme}) => {
  return (
    <View style={styles.container}>
      <Image style={[styles.img1, theme]} source={img1} />
      <Text style={[TEXT.text_16, theme]}>{title}</Text>
      <View style={styles.img2}>
        <Image style={[styles.img2, theme]} source={img2} />
      </View>
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  img1: {
    marginRight: 15,
  },
  img2: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
