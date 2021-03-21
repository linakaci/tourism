import React from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import Data from '../Helpers/Data'
import Visiter from './Visiter'

class PlacesList extends React.Component{

    render(){
        return(
            <View style={styles.main_container}>
                <FlatList
                data={Data}
                keyExtractor= {(item) => item.id.toString()}
                renderItem= {({item}) => <Visiter places={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main_button: {
        height: 50,
        flex:1
    },

    main_container: {
        marginTop: 20,
        flex: 1
    },

    textinput:{

        marginLeft: 5, 
        marginRight:5, 
        height: 50,
        borderColor:'#000000', 
        paddingLeft: 5
    }
})

export default PlacesList