import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecentSearches from '../components/RecentSearches';

const DATA = [
  {id: 1, title: 'Spider Plant'},
  {id: 2, title: 'Song of India'},
  {id: 3, title: 'Spider Plant'},
  {id: 4, title: 'Song of India'},
  {id: 5, title: 'Spider Plant'},
];

const FlatListRecentSearchs = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        nestedScrollEnabled={true}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => {
          return (
            <RecentSearches
              theme={undefined}
              img1={require('../../asset/images/clock.png')}
              title={item.title}
              img2={require('../../asset/images/delete_quit.png')}
            />
          );
        }}
      />
    </View>
  );
};

export default FlatListRecentSearchs;

const styles = StyleSheet.create({});
