import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from "./Components/Home"
import Activites from './Components/Activites';
import Hotels from './Components/Hotels';
import Restaurants from './Components/Restaurants';
import Visiter from './Components/Visiter';
import PlacesList from "./Components/PlacesList";

const Navigator = createStackNavigator({
  Home: {screen:Home},
  Activites: {screen:Activites},
  Hotels: {screen:Hotels},
  Restaurants: {screen:Restaurants},
  Visiter:{screen:PlacesList},
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
