import {
  Alert,
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import FlatListTree from '../item/FlatListTree';
import FlatListPlantPot from '../item/FlatListPlantPot';
import FlatListAccessory from '../item/FlatListAccessory';
import {TEXT} from '../../theme/text';
import {COLOR} from '../../theme/color';
import FlatListItem from '../components/FlatlistItem';
import {useAppDispatch, useAppSelected} from '../../redux/store/store';
import {fetchPlant} from '../../redux/action/plantAction';
import {fetchPlantPot} from '../../redux/action/plantPotAction';
import {fetchAccessory} from '../../redux/action/accessoryAction';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const listPlant = useAppSelected(state => state.plant.listPlant);
  const listPlantPot = useAppSelected(state => state.plant_pot.listPlantPot);
  const listAccessory = useAppSelected(state => state.accessory.listAccessory);

  const [arrPlant, setArrPlant] = useState(listPlant.slice(0, 4));
  const [arrPlantPot, setArrPlantPot] = useState(listPlantPot.slice(0, 4));
  const [arrAccessory, setArrAccessory] = useState(listAccessory.slice(0, 4));

  const [showAllPlant, setShowAllPlant] = useState(false);
  const [showAllPlantPot, setShowAllPlantPot] = useState(false);
  const [showAllAccessory, setShowAllAccessory] = useState(false);

  const handleShowPlant = () => {
    setArrPlant(showAllPlant ? listPlant.slice(0, 4) : listPlant);
    setShowAllPlant(!showAllPlant);
  };
  const handleShowPlantPot = () => {
    setArrPlantPot(showAllPlantPot ? listPlantPot.slice(0, 4) : listPlantPot);
    setShowAllPlantPot(!showAllPlantPot);
  };
  const handleShowAccessory = () => {
    setArrAccessory(
      showAllAccessory ? listAccessory.slice(0, 4) : listAccessory,
    );
    setShowAllAccessory(!showAllAccessory);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlant());
    dispatch(fetchPlantPot());
    dispatch(fetchAccessory());
  }, [dispatch]);

  const handleRefreshing = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Promise.all([
        dispatch(fetchPlant()),
        dispatch(fetchPlantPot()),
        dispatch(fetchAccessory()),
      ])
        .then(() => setRefreshing(false))
        .catch(() => setRefreshing(false));
    }, 3000);
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      {/* CART */}
      <View style={styles.view_cart}>
        <TouchableOpacity
          style={styles.btn_cart}
          onPress={() => Alert.alert('NoWay')}>
          <Image
            tintColor="white"
            source={require('../../../asset/images/shopping-cart.png')}
          />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['white', 'yellow']}
            progressBackgroundColor={'gray'}
            onRefresh={handleRefreshing}
          />
        }>
        <View style={styles.container}>
          {/* BANNER */}
          <View style={{paddingTop: 30, backgroundColor: COLOR.gray1}}>
            <Image
              style={styles.img_banner}
              source={require('../../../asset/images/banner.png')}
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

          {/*Danh sách */}
          <View style={styles.view_content}>
            <FlatListItem
              title="Cây Trồng"
              type="plant"
              onPressSee={() => {
                handleShowPlant;
              }}
              data={listPlant}
            />
            <FlatListItem
              title="Chậu cây trồng"
              type="plant_pot"
              onPressSee={() => {
                handleShowPlantPot();
              }}
              data={listPlantPot}
            />
            <FlatListItem
              title="Phụ kiện cây trồng"
              type="accessory"
              onPressSee={() => {
                handleShowAccessory();
              }}
              data={listAccessory}
            />
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
