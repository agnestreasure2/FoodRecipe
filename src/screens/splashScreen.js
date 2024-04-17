import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'



const SplashScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require ('../assets/images/vegeBg.png')}
            style={styles.bgImage}>

                <Image source={require ('../assets/images/chef2.png')}
                style={styles.imageContainer}
                />
            <Text style={styles.text}>100K+ Premium Recipe</Text>

            <View style={styles.cooking}>
                <Text style={styles.textCooking}>Get</Text>
                <Text style={styles.textCooking1}>Cooking</Text>
                <Text style={styles.subCooking}>Simple way to find Tasty Recipe</Text>
            </View>

            <TouchableOpacity
        style={styles.signInButton}
        onPress={()=> navigation.navigate('signin')} 
      >
        <Text style={styles.signInText}>Start Cooking</Text>
        <FontAwesome5 name="arrow-right" size={16} color="#FFFFFF" />
      </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bgImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        top: 10
    },
    imageContainer: {
        width: 100,
        height: 100,
      
    },
    cooking: {
        top: 200
    },
    signInButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009688",
        padding: 10,
        borderRadius: 15,
        marginTop: '65%',
        width: 345,
        height: 70,
       
      },
      signInText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 40,
      },
      textCooking: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff',
        left: 42,
      },
      textCooking1: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff'
      },
      subCooking: {
        right: 10,
        marginTop: 15,
        color: '#fff',
        fontSize: 15
      },
})

export default SplashScreen;