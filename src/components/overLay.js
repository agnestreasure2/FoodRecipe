import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";


const OverLay = ({ isVisible, onClose }) => {
  const [clickedOption, setClickedOption] = useState(null); 

  const handleOptionPress = (option) => {
    console.log('selected option', option);
    setClickedOption(option); 
  };


  const categoryNames = [
    "All",
    "Cereal",
    "Vegetable",
    "Dinner",
    "Chinese",
    "Local Dish",
    "Fruit",
    "Breakfast",
    "Spanish",
    "Tokyo",
    
    "Lunch",
  
  ];

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlayContainer}
        onPress={onClose}
      >
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Filter Search</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeading}>Time</Text>
            <View style={styles.optionContainer}>
              {["All", "Newest", "Oldest", "Popularity"].map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionPress(option)}>
                  <Text style={[styles.option, clickedOption === option && styles.clickedOption]}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeading}>Rate</Text>
            <View style={styles.optionContainer}>
              {[5, 4, 3, 2, 1].map((rate, index) => (
                
                <TouchableOpacity key={index} onPress={() => handleOptionPress(rate)}>
                  
                  <Text style={[styles.option, clickedOption === rate && styles.clickedOption]}>{rate}</Text>
                  
                  
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeading}>Category</Text>
            <View style={styles.optionContainer}>
              {categoryNames.map((category, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionPress(category)}>
                  <Text style={[styles.option, clickedOption === category && styles.clickedOption]}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.filterButton} >
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 385,
    height: 515,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    overflow: "hidden", 
    top: '12%'
  },
  heading: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: '#000000'
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  option: {
    fontSize: 16,
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    color: "#009688",
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#71B1A1'

  },
  clickedOption: {
    backgroundColor: '#009688',
    color: '#fff',
    
  },
  filterButton: {
    backgroundColor: "#009688",
    padding: 10,
    borderRadius: 10,
    width: 174,
    height: 37
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },
});

export default OverLay;
