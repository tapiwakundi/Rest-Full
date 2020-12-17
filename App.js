import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoryScreen from './src/screens/CategoryScreen'
import { Ionicons } from '@expo/vector-icons';
import { Provider as LocationProvider } from './src/context/locationContext'
import {Provider as BusinessProvider } from './src/context/initialBusinessesContext'
import { setNavigator } from './src/navigationRef'
import ExploreScreen from './src/screens/ExploreScreen';
import AccountScreen from './src/screens/AccountScreen';


const search = createStackNavigator({
  search: SearchScreen,
  business: BusinessScreen
}, {
  
})

const explore = createStackNavigator({
  explore: ExploreScreen,
  business: BusinessScreen
}, {

})

const account = createStackNavigator({
  account: AccountScreen
})

const navigator = createBottomTabNavigator({
  search,
  explore,
  account
})




const App = createAppContainer(navigator)

export default () => {
  return(
    <LocationProvider>
      <BusinessProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
      </BusinessProvider>
    </LocationProvider>
  )
  }