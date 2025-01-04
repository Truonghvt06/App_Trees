import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TEXT} from '../../theme/text';

interface ISearch {
  image: any;
  name: string;
  price: number;
  quantity: number;
  style: any;
}

const ItemTreeSearch = ({style, image, name, price, quantity}: ISearch) => {
  return (
    <View style={styles.container}>
      {/* ẢNH  */}
      <View style={[styles.view_left]}>
        <Image style={[styles.img]} source={image} />
      </View>
      {/* TÊN, GIÁ */}
      <View style={[styles.view_right]}>
        <Text style={[TEXT.text_16]} ellipsizeMode="tail" numberOfLines={1}>
          {name}
        </Text>
        <Text style={[TEXT.text_16, {lineHeight: 25}]}>Giá: {price}</Text>
        <Text style={[TEXT.text3]}>Còn {quantity} sp</Text>
      </View>
    </View>
  );
};

export default ItemTreeSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_left: {},
  view_right: {
    paddingLeft: 15,
    lineHeight: 50,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },
});
