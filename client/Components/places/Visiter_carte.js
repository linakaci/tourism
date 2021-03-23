import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


export default class Visiter extends React.Component {
    render() {
      const places = this.props.places
  
      return (
     <TouchableOpacity onPress>
        <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={{ uri: places.image }} // verifier la sytaxe pour url/uri afin de charger les images depuis les assets
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{places.nom}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{places.description}</Text>
  
            </View>
          </View>
        </View>
  </TouchableOpacity>
      )
    }
  }