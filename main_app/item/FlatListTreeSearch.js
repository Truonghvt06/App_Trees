import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemTreeSearch from '../components/ItemTreeSearch';

const DATA1 = [
  {
    id: 1,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
  {
    id: 2,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
  {
    id: 3,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
  {
    id: 4,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
  {
    id: 5,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
  {
    id: 6,
    name: 'Panse Đen',
    price: 250000,
    quantity: 123,
    image: require('../../asset/images/product1.png'),
  },
];

const FlatListTreeSearch = () => {
  return (
    <View>
      <FlatList
        data={DATA1}
        nestedScrollEnabled={true}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => {
          return (
            <ItemTreeSearch
              theme={undefined}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        }}
      />
    </View>
  );
};

export default FlatListTreeSearch;

const styles = StyleSheet.create({});
