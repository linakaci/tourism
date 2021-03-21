import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Hotels from "./Hotels";
import Activites from "./Activites";
import Restaurants from "./Restaurants";


export default class Home extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <Text
                    style={{
                        marginHorizontal: 55,
                        textAlign: 'center',
                        marginTop: 5,
                        opacity: 0.4
                    }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 200,
                    backgroundColor: "#9683EC",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text style={{
                        color: "white",
                    }}>Visiter</Text>
                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#9683EC",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text
                        onPress={() => navigate('Activites')}

                        style={{
                            color: "white",
                        }}>Activités</Text>
                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#9683EC",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text
                        onPress={() => navigate('Hotels')}
                        style={{
                            color: "white",
                        }}>Hotels</Text>
                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#9683EC",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text
                        onPress={() => navigate('Restaurants')}
                        style={{
                            color: "white",
                        }}>Restaurants</Text>
                </View>

            </View>
        )
    }
}