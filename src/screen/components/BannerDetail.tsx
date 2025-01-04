import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../theme/color';

interface IBanner {
  back_left: any;
  back_right: any;
  img: any;
}
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const BannerDetail = ({back_left, back_right, img}: IBanner) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(pre => (pre === img.length - 1 ? 0 : pre + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(pre => (pre === 0 ? img.length - 1 : pre - 1));
  };
  return (
    <ImageBackground style={styles.container} source={{uri: img[currentIndex]}}>
      <TouchableOpacity style={styles.back_left} onPress={handlePrev}>
        <Image source={back_left} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back_right} onPress={handleNext}>
        <Image source={back_right} />
      </TouchableOpacity>
      <View style={styles.con_dot}>
        {img.map((_: any, index: any) => {
          return (
            <View
              key={index}
              style={[styles.un_dot, currentIndex === index && styles.dot]}
            />
          );
        })}
      </View>
    </ImageBackground>
  );
};

export default BannerDetail;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.3,
    backgroundColor: COLOR.gray1,
    justifyContent: 'flex-end',
  },
  back_left: {
    position: 'relative',
    left: '5%',
    top: '-25%',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 25,
  },
  back_right: {
    position: 'relative',
    right: '-90%',
    top: '-35%',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 25,
  },
  con_dot: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'black',
  },
  un_dot: {
    borderRadius: 10,
    width: 12,
    height: 12,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
});
