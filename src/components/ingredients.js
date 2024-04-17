import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

const Ingredients = () => {
    return (
        <View style={styles.container}>

                <View style={styles.utensilsRow}>
                    <FontAwesome5 name='utensils' size={16} color='gray'/>
                    <Text style={styles.utensilsText}>1 serve</Text>
                    <Text style={styles.utensilsText1}>10 items</Text>
                </View>
                
            <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/tomatoes.png')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.imageText}>Tomatoes</Text>
                <Text style={styles.imageText2}>500g</Text>
            </View>

            <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/cabbage.jpeg')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.imageText}>Cabbage</Text>
                <Text style={styles.imageText2}>500g</Text>
            </View>

            <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/taco.png')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.imageText}>Taco</Text>
                <Text style={styles.imageText1}>500g</Text>
            </View>

            <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/bread.jpeg')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.imageText}>Slice Bread</Text>
                <Text style={styles.imageText3}>500g</Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 25
    },

    utensilsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },

    utensilsText: {
        left: 10,
        color: '#ccc'
    },
    utensilsText1: {
       left: 230,
       color: '#ccc'
    },
    imageRow: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: "#D9DDDc",
        padding: 10,
        marginBottom: 15,
        top: 30,
        borderRadius: 12,
        shadowColor: "gray",
        width: 350,
        left: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        borderRadius: 100, 
        overflow: 'hidden',
        marginRight: 5,
        
        
    },
    image: {
        width: 50,
        height: 50
    },
    imageText: {
        top: 15,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        fontSize: 15
    },

    imageText1: {
        top: 15,
        paddingHorizontal: 125,
        fontWeight: 'normal',
        fontSize: 15,
        color: 'gray'
    },

    imageText2: {
        top: 15,
        paddingHorizontal: 91,
        fontWeight: 'normal',
        fontSize: 15,
        color: 'gray'
    },

    imageText3: {
        top: 15,
        paddingHorizontal: 80,
        fontWeight: 'normal',
        fontSize: 15,
        color: 'gray'
    },
})

export default Ingredients;
