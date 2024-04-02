import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'
import saveCarousel from "../data/saveCarousel";
import ImageFollow from "../components/imageFollow";
import FoodDetails from "./foodDetail";

const FoodDetailScreen = ({ navigation}) => {
  
  const item = saveCarousel[1]; 

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome5 name="arrow-left" size={20} color="gray" style={{ marginLeft: 15 }} />
            </Pressable>

            <Pressable onPress={() => console.log('Menu icon pressed')}>
              <FontAwesome5 name="ellipsis-h" size={24} color="black" style={{ marginRight: 15 }} />
            </Pressable>

            </View>

      <ScrollView>
      <ImageBackground source={{ uri: item.product.image }} style={styles.image}>
        <View style={styles.ratingContainer}>
          <FontAwesome5 name="star" size={16} color="#FFD700" style={styles.ratingIcon} /> 
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>


        <View style={styles.bottomRow}>
                
                <Text style={styles.timeText}>{item.time}</Text>
                <FontAwesome5 name="save" size={16} color="lightgreen"
                 style={styles.saveIcon} />

              </View>
      </ImageBackground>

      <View style={styles.nameRow}>
        <Text style={styles.nameTexts}>Spicy chicken burger with </Text>

        <Text style={styles.reviewRow}>(13k Reviews)</Text>
      </View>

      <View style={styles.nameRow1}>
      <Text style={styles.nameTexts}>French fries</Text>
      </View>

      <View>
        <ImageFollow/>
      </View>

      
      <View>
        <FoodDetails/>
      </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '10%',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    width: 360,
    height: 190,
    borderRadius: 10,
    overflow: 'hidden', 
    position: 'relative',
    top: 30,
    left: 25
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
    left: 140,
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
    marginLeft: 10,
    
    
  },

  nameRow: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 20

  },
  nameRow1: {
    paddingHorizontal: 20,
    paddingTop: 5

  },

  nameTexts: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  reviewRow: {
    fontSize: 15,
    left: 30, 
    top: 6
  },
});

export default FoodDetailScreen;
