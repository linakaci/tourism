import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default class Restaurants extends React.Component {
    render() {
        return (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onLayout={onLayoutRootView}>
                <Text>Restaurants! 👋</Text>
                <Entypo name="rocket" size={30} />
            </View>
        );
    }
}