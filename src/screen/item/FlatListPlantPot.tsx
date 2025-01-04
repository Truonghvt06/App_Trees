import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BlockHome from '../components/BlockHome';
import ItemTree from '../components/ItemTree';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import {fetchPlantPot} from '../../redux/action/plantPotAction';

const FlatListPlantPot = () => {
  const listPlantPot = useAppSelected(state => state.plant_pot.listPlantPot);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlantPot());
  }, []);

  return (
    <>
      <BlockHome
        title="Chậu cây trồng"
        see_more="Xem thêm Chậu cây ->"
        onPress={() => {
          Alert.alert('Có mua không mà xem?');
        }}
        style={undefined}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listPlantPot}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => {
            return (
              <ItemTree
                image={item.image_pro}
                name_pro={item.name}
                price={item.price}
                style={undefined}
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

export default FlatListPlantPot;

const styles = StyleSheet.create({});
