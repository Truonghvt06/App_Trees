import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import {COLOR} from '../theme/color';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      // initialRouteName="Search"// trang đầu hiện lên khi vào Home
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container, // thanh bottom
        tabBarItemStyle: styles.tabItem, // icon
        tabBarActiveTintColor: COLOR.green, //Khi nhấn vào icon
        tabBarInactiveTintColor: COLOR.gray, // Khi bình thường
        tabBarLabelStyle: styles.label,
        tabBarLabelPosition: 'below-icon', //ico và title nằm dọc
        tabBarBadgeStyle: styles.tb, //style thông báo
        tabBarShowLabel: false, //Bỏ tên
        // tabBarActiveBackgroundColor: COLOR.green1,// màu nền icon được nhấn
      }}
      safeAreaInsets={{bottom: 0}}
      backBehavior="history">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        // Icon
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../asset/images/home.png')}
              style={{tintColor: focused ? COLOR.green : COLOR.black}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../asset/images/icon_search.png')}
              style={{tintColor: focused ? COLOR.green : COLOR.black}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../asset/images/notification.png')}
              style={{tintColor: focused ? COLOR.green : COLOR.black}}
            />
          ),
          tabBarBadge: 99, //số thông báo
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../asset/images/profile.png')}
              style={{tintColor: focused ? COLOR.green : COLOR.black}}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // width: '90%',
    left: 15,
    right: 15,
    bottom: 20,
    height: 60,
    backgroundColor: 'white',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Nền mờ (trong suốt)
    borderRadius: 30,
    shadowColor: COLOR.green,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  tabItem: {
    marginBottom: 7,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
  tb: {
    backgroundColor: COLOR.green,
    fontSize: 12,
  },
  bo_nut: {
    backgroundColor: COLOR.green1,
    borderRadius: 10,
  },
});
