import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../theme/color';
import {TEXT} from '../theme/text';

import FlatListRecentSearchs from '../item/FlatListRecentSearchs';
import FlatListTreeSearch from '../item/FlatListTreeSearch';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={styles.container}>
          {/* Back  */}
          <View style={styles.view_back}>
            <Image source={require('../../asset/images/icon_back_left.png')} />
            <Text style={[TEXT.text2, styles.text_search]}>TÌM KIẾM</Text>
          </View>
          {/* Input search  */}
          <View style={styles.view_search}>
            <TextInput
              style={{marginBottom: -7, fontSize: 16}}
              value={search}
              placeholder="Tìm kiếm"
              placeholderTextColor={COLOR.gray}
              onChangeText={text => {
                setSearch(text);
              }}
            />
            <TouchableOpacity>
              <Image source={require('../../asset/images/icon_search.png')} />
            </TouchableOpacity>
          </View>
          {/* CONTENT  */}
          <View style={styles.view_content}>
            <Text style={[TEXT.text2, {marginBottom: 20}]}>
              Tìm kiếm gần đây
            </Text>
            {/* Tìm kiếm gần đây  */}
            <FlatListRecentSearchs />
            {/* SP tìm kiếm  */}
            <FlatListTreeSearch />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  view_back: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  view_search: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view_content: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  text_search: {
    textAlign: 'center',
    flex: 1,
  },
});
