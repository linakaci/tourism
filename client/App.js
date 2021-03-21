import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from "./src/Home"
import Activites from './src/Activites';
import Hotels from './src/Hotels';
import Restaurants from './src/Restaurants';

const Navigator = createStackNavigator({
  Home: {screen:Home},
  Activites: {screen:Activites},
  Hotels: {screen:Hotels},
  Restaurants: {screen:Restaurants},
})
const Container = createAppContainer(Navigator);

export default function App() {
  return (    
      <Container/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
