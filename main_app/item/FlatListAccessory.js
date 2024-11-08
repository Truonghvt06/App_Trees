import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlockHome from '../components/BlockHome';
import ItemTree from '../components/ItemTree';

const DATA = [
  {
    id: 1,
    image: require('../../asset/images/binh.png'),
    name: 'Bình tưới CB2 SAIC',
    // description: 'Ưa bóng',
    price: 250000,
  },
  {
    id: 2,
    image: require('../../asset/images/binh_xit.png'),
    name: 'Bình xịt Xiaoda',
    // description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 3,
    image: require('../../asset/images/xeng.png'),
    name: 'Bộ quốc xẻng mini',
    // description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 4,
    image: require('../../asset/images/gia_do.png'),
    name: 'Giá đỡ Finn Terrazzo',
    // description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 5,
    image: require('../../asset/images/chau_cay3.png'),
    name: 'Spider Plant',
    // description: 'Ưa bóng',
    price: 250000,
  },
  {
    id: 6,
    image: require('../../asset/images/chau_cay2.png'),
    name: 'Song of India',
    // description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 7,
    image: require('../../asset/images/chau_cay4.png'),
    name: 'Grey Star Calarthea',
    // description: 'Ưa sáng',
    price: 250000,
  },
  {
    id: 8,
    image: require('../../asset/images/chau_cay1.png'),
    name: 'Banana Plant',
    // description: 'Ưa sáng',
    price: 250000,
  },
];

const FlatListAccessory = () => {
  return (
    <View>
      <BlockHome
        title="Phụ kiện"
        see_more="Xem thêm Phụ kiện ->"
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
                price={item.price}
                onPress={() => {
                  Alert.alert(
                    'Thông tin',
                    `Tên: ${item.name} \nGiá: ${item.price}`,
                  );
                }}
              />
            );
          }}
          horizontal
        />
      </BlockHome>
    </View>
  );
};

export default FlatListAccessory;

const styles = StyleSheet.create({});
