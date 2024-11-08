import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import BannerDetail from '../components/BannerDetail';

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        img1={require('../../asset/images/icon_back_left1.png')}
        img2={require('../../asset/images/shopping-cart.png')}
        title="Spider Plant"
        onPressBack={() => navigation.goBack()}
        onPressIcon={() => Alert.alert('Gio hàng')}
        theme={undefined}
      />
      <BannerDetail
        back_left={require('../../asset/images/icon_back_left.png')}
        back_right={require('../../asset/images/icon_back_right1.png')}
        img={require('../../asset/images/product1.png')}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
