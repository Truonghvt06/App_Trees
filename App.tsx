import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screen/screens/LoginScreen';
import RegisterScreen from './src/screen/screens/RegisterScreen';
import BottomTabNavigation from './src/screen/bottom_tab/BottomTabNavigation';
import DetailScreen from './src/screen/screens/DetailScreen';
import HomeScreen from './src/screen/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import FavouriteScreen from './src/screen/screens/favourite/FavoriteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Favorite" component={FavouriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
