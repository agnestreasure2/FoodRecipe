import React from "react";
import { View, StyleSheet, FlatList, Pressable, Image, Text } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import newRecipes from "../data/newRecipes";
import foodRecipe from '../data/newRecipes'
import saveRecipe from "../data/newRecipes";
import saveCarousel from "../data/saveCarousel";



const NewRecipe = () => {
    return (
    <View style={styles.container}>
        <FlatList
        data={saveCarousel}
        renderItem={({ item }) => (
            <Pressable
                onPress={() => {}}
            >
                <View style={styles.imageContainer1}>

                    
                    <View style={styles.image1}>
                        <Image source={{ uri: item.image }} style={styles.imageStyle1} />
                    </View>

                    <View style={styles.ratingContainer1}>
                 <FontAwesome5 name="star" size={10} color="yellow" style={styles.ratingIcon1} />

                </View>
                    <View style={styles.nameRow1}>
                    <Text style={styles.text11}>{item.name}</Text>
                    </View>
                    
                    <Text style={styles.timeText1}>Time</Text>
                    <View style={styles.timeRowContainer1}>
                        <Text style={styles.texts1}>{item.time}</Text>
                        <Image source={require('../assets/images/save.png')}
                        tintColor={'#009688'} style={styles.saveImage1} />
                    </View>
                </View>
            </Pressable>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
    />

        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    ratingContainer1: {
        position: 'absolute',
        top: 6,
        right: -5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFD8B1',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 8,
      },
      ratingIcon1: {
        marginRight: 5,
      },
      nameRow1: {
        bottom: 10
    },
    text11: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',marginTop: -20
    },

    timeText1: {
        right: 40,
        color: '#A9A9A9'
    },
    imageContainer1: {
        backgroundColor: '#D9D9D9', 
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 260,
        zIndex: 2,
        width: 150,
        height: 235,
        borderRadius: 12
    },
    image1: {
        width: 150,
        height: 155,
        borderRadius: 75, 
        overflow: 'hidden',
        // borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center', 
        top: -39    
    },
    imageStyle1: {
        width: 150,
        height: 150,
        borderRadius: 75, 
    },
    timeRowContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    texts1: {
        marginRight: 6,
        fontWeight: 'bold'
    },
    saveImage1: {
        width: 16,
        height: 16,
        borderRadius: 100,
        backgroundColor: 'white',
        marginLeft: 50
    },
})
export default NewRecipe;