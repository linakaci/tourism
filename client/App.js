import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from "./src/splash";
import AppNavigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <Splash></Splash>
      <AppNavigator/>
      <StatusBar style="auto" />
    </View>
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
