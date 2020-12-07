import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoryScreen from './src/screens/CategoryScreen'


const Search = createStackNavigator({
  search: SearchScreen,
  category: CategoryScreen
})

const navigator = createBottomTabNavigator({
  Search,
  Business: BusinessScreen

})


export default createAppContainer(navigator)