import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import saveCarousel from "../data/saveCarousel";

const SaveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.savedText}>Saved Recipes</Text>
      <FlatList
        data={saveCarousel}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('details', {item})}
            style={styles.itemContainer}
          >
           
            <ImageBackground source={{ uri: item.product.image }} style={styles.image}>
           
              <View style={styles.ratingContainer}>
                <FontAwesome5 name="star" size={16} color="#FFD700" style={styles.ratingIcon} />
                <Text style={styles.ratingText}>{item.rating}</Text>

              </View>
              
              <Text style={styles.nameText}>{item.product.name}</Text>
             
              
              <View style={styles.bottomRow}>
                <Text style={styles.subNameText}>{item.product.subName}</Text>
                
                <Text style={styles.timeText}>{item.time}</Text>
                <FontAwesome5 name="save" size={16} color="lightgreen"
                 style={styles.saveIcon} />

              </View>
            </ImageBackground>
          </Pressable>
        )}
        keyExtractor={(item) => item.product.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '10%',
  },
  savedText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  image: {
    width: 355,
    height: 190,
    borderRadius: 10,
    overflow: 'hidden', 
    position: 'relative',
    top: 30 
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD8B1',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
  },
  nameText: {
    position: 'absolute',
    bottom: 35,
    left: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomRow: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTimeContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  subNameText: {
    fontSize: 12,
    color: '#fff',
    marginRight: 10,
  },
  timeText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: '52%',
    
  },
  saveIcon: {
    marginLeft: 2,
    marginHorizontal: 15,
    
  },
});

export default SaveScreen;
