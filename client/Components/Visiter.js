import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,FlatList } from 'react-native';

export default class Visiter extends React.Component {
  render() {
    const places = this.props.places
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{ uri: places.image_uri }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{places.title}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{places.description}</Text>
            
          </View>
        </View>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',

    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },

})

