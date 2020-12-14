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

const navigator = createStackNavigator({
  search: SearchScreen,
  category: CategoryScreen,
  business: {
    screen: BusinessScreen,
    // navigationOptions: {
    //   header: ({ goBack }) => ({
    //     left: <Ionicons name="ios-arrow-dropleft" size={24} color="black" onPress={ () => { goBack() } } />,
    //   }),
    // },
  }
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