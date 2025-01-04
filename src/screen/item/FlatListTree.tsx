import {
  Alert,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import BlockHome from '../components/BlockHome';
import ItemTree from '../components/ItemTree';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import {fetchPlant} from '../../redux/action/plantAction';

const FlatListTree = () => {
  const navigation: any = useNavigation();

  const listPlant = useAppSelected(state => state.plant.listPlant);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlant());
  }, []);

  return (
    <>
      <BlockHome
        title="Cây trồng"
        see_more="Xem thêm ->"
        onPress={() => {
          Alert.alert('Có mua không mà xem?');
        }}
        style={undefined}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listPlant}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => {
            return (
              <ItemTree
                image={item.image_pro}
                name_pro={item.name}
                description={item.characteristic || null}
                price={item.price}
                style={undefined}
                onPress={() => {
                  navigation.navigate('Detail', {item: item});
                }}
              />
            );
          }}
          // numColumns={2}
          horizontal
        />
      </BlockHome>
      {/* <SectionList
        sections={DATA}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}: any) => {
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
      /> */}
    </>
  );
};

export default FlatListTree;

const styles = StyleSheet.create({});
