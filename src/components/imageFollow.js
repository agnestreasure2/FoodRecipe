import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const ImageFollow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/profile.jpg')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>Laura Wilson</Text>
                <View style={styles.buttonRow}>
                    <Text style={styles.buttonText}>follow</Text>
                </View>
            </View>
            <View style={styles.locationRow}>
                <FontAwesome5 name="map-marker-alt" size={16} color="#009688" style={styles.icon}/>
                 <Text style={styles.subText}>Lagos, Nigeria</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    profileRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 15,
        
    },
    imageContainer: {
        borderRadius: 100, 
        overflow: 'hidden'
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        right: 70,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonRow: {
        borderRadius: 10,
        overflow: 'hidden',
        width: 80,
        height: 35,
    },
    buttonText: {
        padding: 8,
        color: '#fff',
        backgroundColor: "#009688",
        textAlign: 'center'
    },
    locationRow: {
        flexDirection: 'row',
        paddingHorizontal: 80,
        bottom: 25,
       
    },
    subText: {
        color: 'gray',
        fontSize: 13,
        left: 3,

    },
});

export default ImageFollow;
