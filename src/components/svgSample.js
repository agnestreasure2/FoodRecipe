import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


import Bg from '../assets/icons/Bg.svg';

const MyTabBar = () => {
    return (
        <View style={styles.container}>
            <Bg width={"100%"} height={"100%"} style={styles.imageContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'yellow',
    },
    imageContainer: {
        // flex: 0,
        // height: "100%", 
        // width: '100%', 
    },
    iconsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '80%', 
        height: '100%', 
        paddingHorizontal: 20, 
    },
    icon: {
        borderRadius: 100, 
    },
    plusIconContainer: {
        borderRadius: 100, 
        overflow: 'hidden', 
        width: 50, 
        height: 50, 
        backgroundColor: 'green', 
        alignItems: 'center',
        bottom: 100 
    },
    plusIcon: {
        textAlign: 'center', 
        lineHeight: 50,
       
    },
});

export default MyTabBar;
