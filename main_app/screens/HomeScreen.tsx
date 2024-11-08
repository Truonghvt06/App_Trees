import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import {TEXT} from '../theme/text';
import FlatListTree from '../item/FlatListTree';
import FlatListPlantPot from '../item/FlatListPlantPot';
import FlatListAccessory from '../item/FlatListAccessory';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      {/* CART  */}
      <View style={styles.view_cart}>
        <TouchableOpacity
          style={styles.btn_cart}
          onPress={() => Alert.alert('NoWay')}>
          <Image
            tintColor="white"
            source={require('../../asset/images/shopping-cart.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {/* BANNER  */}
          <View style={{paddingTop: 30, backgroundColor: COLOR.gray1}}>
            <Image
              style={styles.img_banner}
              source={require('../../asset/images/banner.png')}
            />
            <View style={styles.view_banner}>
              <Text style={TEXT.text_24}>Planta - toả sáng</Text>
              <Text style={TEXT.text_24}>không gian nhà bạn</Text>
              <TouchableOpacity style={styles.btn_banner}>
                <Text style={[TEXT.text2, {color: COLOR.green}]}>
                  Xem hàng mới về{' ->'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* CONTENT  */}
          <View style={styles.view_content}>
            <FlatListTree />
            <FlatListPlantPot />
            <FlatListAccessory />
            {/* <FlatListTree /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: 'white',
  },
  view_cart: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  view_banner: {
    flex: 1,
    paddingLeft: 30,
    position: 'absolute',
    top: 40,
    left: 0,
  },
  view_content: {
    flex: 1,
    backgroundColor: 'white',
  },
  img_banner: {
    width: screenWidth,
  },
  btn_cart: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.green1,
    borderRadius: 50,
  },
  btn_banner: {
    paddingTop: 15,
  },
});
