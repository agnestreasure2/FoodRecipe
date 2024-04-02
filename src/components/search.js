import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
       
      <FontAwesome5 name="search" size={30} color="#DBDBDB" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search recipe"
        placeholderTextColor="gray"
      />

<TouchableOpacity style={styles.filterIcon}>
        <Image
          source={require("../assets/icons/Filter.png")}
          
        />
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: '5%',
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 12,
    gap: 10,
    padding: 8,
    width: 300,
    height: 55,
   backgroundColor: 'whitesmoke',
   right: 10

  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#ccc",
    paddingLeft: 1,
    justifyContent: "center",
    borderRadius: 7,
    right: 10
  },
  filterIcon: {
    position: "absolute",
    backgroundColor: "#009688",
    borderRadius: 8,
    padding: 8,
    marginLeft: 325,
    width: 50,
    height: 45,
    
    
   
    
  },
});

export default Search;
