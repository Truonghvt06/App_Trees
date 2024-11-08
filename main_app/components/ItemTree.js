import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT} from '../theme/text';
import {COLOR} from '../theme/color';

const ItemTree = ({image, name_pro, description, price, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={image} />
      <View style={styles.view_text}>
        <Text style={[TEXT.text2]} ellipsizeMode="tail" numberOfLines={1}>
          {name_pro}
        </Text>
        {description && (
          <Text style={[TEXT.text3, styles.text, {color: COLOR.gray}]}>
            {description}
          </Text>
        )}
        <Text style={[TEXT.text2, {color: COLOR.green}]}>{price}đ</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTree;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: COLOR.gray,
    width: 157,
  },
  view_text: {
    paddingTop: 5,
    paddingBottom: 20,
  },
  text: {},
});
