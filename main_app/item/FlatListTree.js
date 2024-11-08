import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlockHome from '../components/BlockHome';
import ItemTree from '../components/ItemTree';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    image: require('../../asset/images/product1.png'),
    name: 'Spider Plant',
    description: 'Ưa bóng',
    price: 250000,
  },
  {
    id: 2,
    image: require('../../asset/images/product2.png'),
    name: 'Song of India',
    description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 3,
    image: require('../../asset/images/product3.png'),
    name: 'Grey Star Calarthea',
    description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 4,
    image: require('../../asset/images/product4.png'),
    name: 'Banana Plant',
    description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 5,
    image: require('../../asset/images/product1.png'),
    name: 'Spider Plant',
    description: 'Ưa bóng',
    price: 250000,
  },
  {
    id: 6,
    image: require('../../asset/images/product2.png'),
    name: 'Song of India',
    description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 7,
    image: require('../../asset/images/product3.png'),
    name: 'Grey Star Calarthea',
    description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 8,
    image: require('../../asset/images/product4.png'),
    name: 'Banana Plant',
    description: 'Ưa sáng',
    price: 250000,
  },
];

const FlatListTree = () => {
  const navigation= useNavigation();
  return (
    <View>
      <BlockHome
        title="Cây trồng"
        see_more="Xem thêm Cây trồng ->"
        onPress={() => {
          Alert.alert('Có mua không mà xem?');
        }}
        style={undefined}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => {
            return (
              <ItemTree
                image={item.image}
                name_pro={item.name}
                description={item.description}
                price={item.price}
                style={undefined}
                onPress={() => {
                  Alert.alert(
                    'Tên sản phẩm',
                    `Name: ${item.name} \nPrice: ${item.price}`,
                  );
                  navigation.navigate('Detail');
                }}
              />
            );
          }}
          // numColumns={2}
          horizontal
        />
      </BlockHome>
    </View>
  );
};

export default FlatListTree;

const styles = StyleSheet.create({});
