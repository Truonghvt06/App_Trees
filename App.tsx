import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './main_app/screens/LoginScreen';
import RegisterScreen from './main_app/screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './main_app/screens/HomeScreen';
import BottomTabNavigation from './main_app/bottom_tab/BottomTabNavigation';
import DetailScreen from './main_app/screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
