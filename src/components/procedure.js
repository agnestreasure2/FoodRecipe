import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'


const Procedures = () => {
    return (
        <View style={styles.container}>

                <View style={styles.utensilsRow}>
                    <FontAwesome5 name='utensils' size={16} color='gray'/>
                    <Text style={styles.utensilsText}>1 serve</Text>
                    <Text style={styles.utensilsText1}>10 items</Text>
                </View>
            <View style={styles.stepRow}>
                <Text style={styles.stepText}>Step 1</Text>
                <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper</Text>
            </View>

            <View style={styles.stepRow}>
                <Text style={styles.stepText}>Step 2</Text>
                <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper</Text>
            </View>

            <View style={styles.stepRow}>
                <Text style={styles.stepText}>Step 3</Text>
                <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                       ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                       ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                       ullamcorper</Text>
            </View>

            <View style={styles.stepRow}>
                <Text style={styles.stepText}>Step 4</Text>
                <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper</Text>
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
    stepRow: {
        backgroundColor: "#D9DDDc",
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        top: 30,
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },

      stepText: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 6
      },

      subText: {
        paddingHorizontal: 4,
        color: 'gray'
      },

})



export default Procedures;