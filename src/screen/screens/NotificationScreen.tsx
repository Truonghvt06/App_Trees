import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Hello',
    active: [
      {id: '1a', title: 'Task 1'},
      {id: '1b', title: 'Task 2'},
      {id: '1c', title: 'Task 3'},
    ],
  },
  {
    id: 2,
    name: 'Bye',
    active: [
      {id: '2a', title: 'Task 1'},
      {id: '2b', title: 'Task 2'},
      {id: '2c', title: 'Task 3'},
    ],
  },
];
const NotificationScreen = () => {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
