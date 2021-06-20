import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './screens/Details'
import HomeScreen from './screens/Home'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator}from 'react-navigation-stack'
export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}
const AppStackNavigator = createStackNavigator({
  Home:{screen:HomeScreen,
    navigationOptions:{headerShown:false}},
  Details:{screen:DetailsScreen,},
},
{initialRouteName:'Home'})
const AppContainer = createAppContainer(AppStackNavigator)
