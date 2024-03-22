import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'




const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Hello Fola</Text>

            <View style={styles.header}>
                <Text>What are you cooking today?</Text>
                <FontAwesome5 name="user" style={styles.icon} size={30} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '10%',
        padding: 35,
    },
    textContainer: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row'
    },
    icon: {
        color: 'orange',
        bottom: 25,
        marginLeft: '35%'
    }
})

export default HomeScreen;