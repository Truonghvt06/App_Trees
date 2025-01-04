import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TangGiam = (props: any) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          //   inputRef.current?.blur(); // Mất focus khi nhấn nút trừ
          props.onPressMinus();
        }}>
        <AntDesign name="minussquareo" size={24} />
      </TouchableOpacity>
      <TextInput
        // ref={inputRef}
        style={styles.input}
        value={props.value}
        multiline={false}
        keyboardType="numeric"
        onChangeText={text => {
          props.onChangeText(text);
        }}
        onBlur={() => Keyboard.dismiss()} // Mất focus khi nhấn ra ngoài
        placeholder={props.placeholder}
        {...props}
      />
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          //   inputRef.current?.blur(); // Mất focus khi nhấn nút cộng
          props.onPressPlus();
        }}>
        <AntDesign name="plussquareo" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default TangGiam;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
