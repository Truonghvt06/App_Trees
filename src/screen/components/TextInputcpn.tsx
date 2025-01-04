import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../../theme/color';

/**
 * an: Anh an mat khau
 *
 * hien: Anh hien mat khau
 *
 * style:
 * @param {style, an, hien,} props
 * @returns
 */

const TextInputcpn = (props: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: props.isFocused ? COLOR.green : '#8B8B8B',
          borderWidth: props.isFocused ? 2 : 1,
        },
      ]}>
      <TextInput
        style={[styles.input, props.style]}
        secureTextEntry={props?.secureTextEntry || false}
        {...props}
        placeholderTextColor={props.placeholderTextColor || COLOR.gray}
      />
      {props.an && props.hien && (
        <TouchableOpacity style={styles.image1} onPress={props.onPressShow}>
          <Image source={props.showPass ? props.hien : props.an} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputcpn;

//Pass
// export const TextInputPass = (props: any) => {
//   const [showPass, setShowPass] = useState(false);

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           borderColor: props.isFocused ? COLOR.green : '#8B8B8B',
//           borderWidth: props.isFocused ? 2 : 1,
//         },
//       ]}>
//       <TextInput
//         style={[styles.input, props.style]}
//         secureTextEntry={!showPass}
//         {...props}
//         placeholderTextColor={props.placeholderTextColor || '#8B8B8B'}
//       />

//       {props.an && props.hien && (
//         <TouchableOpacity
//           style={styles.image1}
//           onPress={() => setShowPass(!showPass)}>
//           <Image source={showPass ? props.hien : props.an} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: '#8B8B8B',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 45,
  },
  image1: {
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
  },
});
