import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import BannerDetail from '../components/BannerDetail';
import ButtonBe from '../components/detail/ButtonBe';
import {COLOR} from '../../theme/color';
import {TEXT} from '../../theme/text';
import Info from '../components/detail/Info';
import TangGiam from '../components/detail/TangGiam';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailScreen = ({route}: any) => {
  const [quantity, setQuantity] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const {item, type} = route.params;
  const navigation: any = useNavigation();

  const handlePlus = () => {
    const newSL = quantity + 1;
    setQuantity(newSL);
    setShowBackground(newSL > 0);
  };
  const handleMinus = () => {
    if (quantity > 0) {
      const newSL = quantity - 1;
      setQuantity(newSL);
      setShowBackground(newSL > 0);
    }
  };
  const handleTotal = () => {
    const total = item.price * quantity;

    return total;
  };

  const handleFovorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Header
        img1={require('../../../asset/images/icon_back_left1.png')}
        img2={require('../../../asset/images/shopping-cart.png')}
        title={item.name}
        onPressBack={() => navigation.goBack()}
        onPressIcon={() => navigation.navigate('Favorite')}
        style={undefined}
      />
      <ScrollView style={{flex: 1}}>
        <BannerDetail
          back_left={require('../../../asset/images/icon_back_left.png')}
          back_right={require('../../../asset/images/icon_back_right1.png')}
          img={item.image_slide}
        />
        {/* Thuộc tính  */}
        <View style={styles.view_mota}>
          {/* Nuts  */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <ButtonBe title={item.type} />
              {type === 'plant' && <ButtonBe title={item?.characteristic} />}
            </View>
            <TouchableOpacity onPress={() => handleFovorite()}>
              {isFavorite ? (
                <AntDesign name="heart" size={30} color={COLOR.red} />
              ) : (
                <AntDesign name="hearto" size={30} />
              )}
            </TouchableOpacity>
          </View>

          {/* Gia  */}
          <Text style={styles.txt_price}>
            {Number(item.price).toLocaleString('vi-VN')}đ
          </Text>
          {/* Chi tiet san pham  */}
          <Text style={[TEXT.text_16, styles.txt_chitiet]}>
            Chi tiết sản phẩm
          </Text>
          <View style={{height: 1, backgroundColor: COLOR.gray}} />
          {/* Info  */}
          <Info title="Kích cỡ" info={item.size} />
          <Info title="Xuất xứ" info={item.origin} />
          <Info
            title="Tình trạng"
            info={`Còn ${item.quantity} sp`}
            style={styles.txt_tinhtrang}
          />
          <Text
            style={[
              TEXT.text_16,
              {marginTop: 15, textDecorationLine: 'underline'},
            ]}>
            Mô tả:{' '}
          </Text>
          <Text style={styles.txt_mota}>{item.description}</Text>
          <Text style={styles.txt_mota}>{item.description}</Text>
        </View>
      </ScrollView>

      {/* BTN MUA  */}
      <View style={styles.view_mua}>
        <View style={styles.view_dachon}>
          <Text>
            Đã chọn <Text>{quantity}</Text> sản phẩm
          </Text>
          <Text>Tạm tính</Text>
        </View>

        {/* Tang giamr  */}
        <View style={styles.view_nut_tanggiam}>
          <TangGiam
            value={String(quantity)}
            onChangeText={(text: string) => {
              const number = parseInt(text, 10) || 0;
              setQuantity(number);
            }}
            onPressPlus={() => handlePlus()}
            onPressMinus={() => handleMinus()}
          />
          <Text style={[TEXT.text1, {fontWeight: '400'}]}>
            {Number(handleTotal()).toLocaleString('vi-VN')}đ
          </Text>
        </View>

        {/* Nut mua  */}
        <TouchableOpacity
          disabled={!showBackground}
          style={[
            styles.btn_mua,
            {backgroundColor: showBackground ? COLOR.green3 : COLOR.gray},
          ]}
          onPress={() => {}}>
          <Text style={[TEXT.text1, {color: 'white'}]}>CHON MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view_mota: {
    flex: 1,
    paddingHorizontal: 25,
  },
  view_mua: {
    paddingHorizontal: 25,
    paddingTop: 5,
    paddingBottom: 10,
    position: 'relative',
    bottom: '0%',
  },
  view_dachon: {
    // marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 1,
  },
  view_nut_tanggiam: {
    marginTop: -7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 1,
  },
  txt_price: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 10,
    color: COLOR.green,
  },
  txt_chitiet: {
    marginTop: 10,
    marginBottom: 5,
  },
  txt_tinhtrang: {
    color: COLOR.green,
  },
  txt_mota: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  btn_mua: {
    backgroundColor: COLOR.green3,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
