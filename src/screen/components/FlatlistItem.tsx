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

const FlatListItem = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <>
      <BlockHome
        title={props.title}
        see_more="Xem thêm ->"
        onPress={() => {
          props.onPressSee;
        }}
        style={undefined}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.data}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => {
            return (
              <ItemTree
                image={item.image_pro}
                name_pro={item.name}
                description={item?.characteristic || null}
                price={item.price}
                style={undefined}
                onPress={() => {
                  navigation.navigate('Detail', {item: item, type: props.type});
                }}
              />
            );
          }}
          // numColumns={2}
          horizontal
        />
      </BlockHome>
    </>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({});
