import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BlockHome from '../components/BlockHome';
import ItemTree from '../components/ItemTree';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import {fetchAccessory} from '../../redux/action/accessoryAction';

const FlatListAccessory = () => {
  const listAccessory = useAppSelected(state => state.accessory.listAccessory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccessory());
  }, []);
  return (
    <>
      <BlockHome
        title="Phụ kiện"
        see_more="Xem thêm Phụ kiện ->"
        onPress={() => {
          Alert.alert('Có mua không mà xem?');
        }}
        style={undefined}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listAccessory}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => {
            return (
              <ItemTree
                style={undefined}
                image={item.image_pro}
                name_pro={item.name}
                price={item.price}
                description={null}
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
    </>
  );
};

export default FlatListAccessory;

const styles = StyleSheet.create({});
