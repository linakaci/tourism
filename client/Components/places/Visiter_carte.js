import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


export default class Visiter_carte extends React.Component {
    render() {
      const places = this.props.navigation.state.params.place
      console.log ('places dans visiter carte :',  places)
      return (
        <View style={styles.main_container}>
           <View style={styles.header_container}>
            <Text style={styles.title_text}>{places.nom}</Text>
          </View>
        <Image
          style={styles.image}
          source={{ uri: places.image }} // verifier la sytaxe pour url/uri afin de charger les images depuis les assets
        />
        <View style={styles.content_container}>
         
          <View style={styles.description_container}>
            <Text style={styles.description_text} >{places.description}</Text>

          </View>
        </View>
      </View>

 
      )
    }
  }

  const styles = StyleSheet.create({
    main_container: {
      
            height: 300,
      
    },
    image: {
      flex:8,
      
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'column'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      textAlign: 'center',
      marginTop:20
      
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
  
  