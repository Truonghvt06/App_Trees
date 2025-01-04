import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TEXT} from '../../theme/text';
import {COLOR} from '../../theme/color';

interface ITreStyle {
  image: any;
  name_pro: string;
  description: string | null;
  price: number;
  onPress: () => void;
  style: any;
}

const ItemTree = ({
  image,
  name_pro,
  description,
  price,
  onPress,
  style,
}: ITreStyle) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.view_text}>
        <Text style={[TEXT.text2]} ellipsizeMode="tail" numberOfLines={1}>
          {name_pro}
        </Text>
        {description && (
          <Text style={[TEXT.text3, {color: COLOR.gray}]}>{description}</Text>
        )}
        <Text style={[TEXT.text2, {color: COLOR.green}]}>
          {price.toLocaleString('vi-VN')}đ
        </Text>
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
  image: {
    width: 140,
    height: 150,
    borderRadius: 10,
  },
});
