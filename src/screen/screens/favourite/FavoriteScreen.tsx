import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelected} from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TEXT} from '../../../theme/text';
import {COLOR} from '../../../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';

const FavouriteScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [userId, setUserId] = useState(null);

  //   const listFavorite = useAppSelected(
  //     state => state.favoriteStore.listFavorite,
  //   );
  //   const userFavorites = listFavorite.filter(item => item.user_id === userId);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch();
  //   return () => {
  //     dispatch(resetFavorites()); // Reset danh sách khi thoát màn hình
  //   };
  // }, [dispatch]);

  const getUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('userLogin');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
      return null;
    }
  };

  //Lấy danh sách yêu thích theo id user
  useEffect(() => {
    const fetchUserId = async () => {
      const user = await getUserFromStorage();
      if (user) {
        setUserId(user.id);
      }
    };
    fetchUserId();
  }, []);

  return (
    <View style={[styles.container]}>
      <Header
        style={undefined}
        title="FAVORITE"
        img1={require('../../../../asset/images/icon_back_left1.png')}
        onPressBack={() => navigation.goBack()}
      />
      {/* <FlatList
        data={userFavorites}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', {item: item});
              }}
              style={[
                styles.view_container,
                //   {backgroundColor: theme.backgroundColor},
              ]}>
              <View style={styles.view_img}>
                <Image
                  style={styles.img}
                  source={{uri: item.product_details.image_pro}}
                />
              </View>
              <View style={styles.view_info}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      TEXT.text_16,
                      // {fontWeight: 'bold', color: theme.textColor},
                    ]}>
                    {item.product_details.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 180,
                    }}
                    onPress={() => setIsFavorite(!isFavorite)}>
                    <AntDesign name="heart" size={30} color={COLOR.red} />
                  </TouchableOpacity>
                </View>
                <Text style={[TEXT.text3, {marginBottom: 5}]}>
                  {item.product_details.type}
                </Text>
                <Text
                  style={[{color: COLOR.gray, fontSize: 12}]}
                  ellipsizeMode="tail"
                  numberOfLines={2}>
                  {item.product_details.description}
                </Text>
                <Text
                  style={[TEXT.text_16, {color: COLOR.green, marginTop: 5}]}>
                  $ {item.product_details.price}đ
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      /> */}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  view_container: {
    flex: 1,
    flexDirection: 'row',
    height: 130,
    marginHorizontal: 7,
    marginBottom: 15,
    backgroundColor: COLOR.gray1,
    borderRadius: 10,
    padding: 7,
    shadowColor: '#fff',
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7,
    // position: 'relative',
  },
  view_img: {
    marginRight: 10,
  },
  view_info: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    width: 120,
    height: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.gray,
  },
});
