import React from "react";
import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import Recipe from "../components/recipe";
import RecipeScreen from "./recipeScreen";



const ProfileScreen = () => {

    return (
        <View style={styles.container}> 

            <View style={styles.headerRow}>
            <Text style={styles.text}>Profile</Text>

            <Pressable onPress={() => console.log('Menu icon pressed')}>
              <FontAwesome5 name="ellipsis-h" size={24} color="black" style={{ marginRight: 30 }} />
            </Pressable>
            </View>

            <View style={styles.profileRow}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile.jpg')}
                    style={styles.image}
                    />
                </View>

                <Text style={styles.profileText}>Recipe</Text>
                <Text style={styles.profileText}>Followers</Text>
                <Text style={styles.profileText}>Following</Text>
            </View>

            <View style={styles.followRow}>
                <Text style={styles.followText}>4</Text>
                <Text style={styles.followText}>2.5M</Text>
                <Text style={styles.followText}>259</Text>
            </View>

            <View style={styles.chefRow}>
                <Text style={styles.chefName}>Afuwape Abiodun</Text>
                <Text style={styles.subChef}>chef</Text>
            </View>

            <View style={styles.chefDetails}>
                <Text style={styles.detailsChef}>Private Chef</Text>
                <Text style={styles.detailsChef}>Passionate about food and life</Text>

                <TouchableOpacity>
                <Text style={styles.moreText}>More..</Text>
                </TouchableOpacity>
                
            </View>

            {/* <View>
                <RecipeScreen/>
            </View> */}
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '10%'
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
       left: 160,
       fontSize: 20,
       fontWeight: 'bold'
    },

    profileRow: {
        flexDirection: 'row',
        top: 20,
        paddingHorizontal: 20,
    },

    imageContainer: {
        borderRadius: 100,
        overflow: 'hidden'
    },

    image: {
        width: 100,
        height: 100
    },

    profileText: {
        fontSize: 16,
        color: '#ccc',
        top: 25,
        paddingHorizontal: 20
    },

    followRow: {
        flexDirection: 'row',
    },

    followText: {
        paddingHorizontal: 32,
        bottom: 30,
        left: 120,
        fontSize: 24,
        fontWeight: 'bold'

    },

    chefRow: {
        top: 10,
        paddingHorizontal: 20
    },

    chefName: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    subChef: {
        color: '#ccc'
    },

    chefDetails: {
        top: 20,
        paddingHorizontal: 20,
       
    },

    detailsChef: {
        color: 'gray'
    },

    moreText: {
        color: "#009688",
    },
})

export default ProfileScreen;