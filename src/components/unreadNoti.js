import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

const UnreadScreen = () => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.todayText}>Today</Text>
          </View>
    
          <View style={styles.notification}>
            <View style={styles.recipeRow}>
              <Text style={styles.recipeText}>New Recipe Alert</Text>
    
              <View style={styles.imageContainer}>
                <FontAwesome5 name="file" size={24} color="orange" />
              </View>
            </View>
    
            <View style={styles.loremContainer}>
              <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ullamcorper
              </Text>
    
              <Text style={styles.timeText}>30 min ago</Text>
            </View>
          </View>
    
          <View style={styles.notification}>
            <View style={styles.recipeRow}>
              <Text style={styles.recipeText}>New Recipe Alert</Text>
    
              <View style={styles.imageContainer}>
                <FontAwesome5 name="file" size={24} color="orange" />
              </View>
            </View>
    
            <View style={styles.loremContainer}>
              <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ullamcorper
              </Text>
    
              <Text style={styles.timeText}>10 min ago</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <View style={styles.recipeRow}>
              <Text style={styles.recipeText}>New Recipe Alert</Text>
    
              <View style={styles.imageContainer}>
                <FontAwesome5 name="file" size={24} color="orange" />
              </View>
            </View>
    
            <View style={styles.loremContainer}>
              <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ullamcorper
              </Text>
    
              <Text style={styles.timeText}>10 min ago</Text>
            </View>
          </View>
          <View>
            <Text style={styles.todayText}>Yesterday</Text>
          </View>
    
          <View style={styles.notification}>
            <View style={styles.recipeRow}>
              <Text style={styles.recipeText}>New Recipe Alert</Text>
    
              <View style={styles.imageContainer}>
                <FontAwesome5 name="file" size={24} color="orange" />
              </View>
            </View>
    
            <View style={styles.loremContainer}>
              <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ullamcorper
              </Text>
    
              <Text style={styles.timeText}>30 min ago</Text>
            </View>
          </View>
    
          <View style={styles.notification}>
            <View style={styles.recipeRow}>
              <Text style={styles.recipeText}>New Recipe Alert</Text>
    
              <View style={styles.imageContainer}>
                <FontAwesome5 name="file" size={24} color="orange" />
              </View>
            </View>
    
            <View style={styles.loremContainer}>
              <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ullamcorper
              </Text>
    
              <Text style={styles.timeText}>15 min ago</Text>
            </View>
          </View>
          
    
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
      notification: {
        backgroundColor: "whitesmoke",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        // Shadow properties
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      todayText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,
        marginTop: 10
      },
      recipeRow: {
        flexDirection: "row",
        alignItems: "center",
      },
      imageContainer: {
        width: 45,
        height: 45,
        borderRadius: 18, 
        backgroundColor: "#FFE5B4",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '50%',
      },
      loremContainer: {
        marginTop: 8,
      },
      loremText: {
        fontSize: 17,
        color: "#ccc",
      },
      recipeText: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      timeText: {
        color: "#ccc",
        marginTop: 15
      },
    });
export default UnreadScreen;
