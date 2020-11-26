import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Business: BusinessScreen
}, {
  initialRouteName: 'Search',
  defaulNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)