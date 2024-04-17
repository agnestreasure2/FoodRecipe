import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import OverLay from '../components/overLay'

const Search = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View style={styles.container}>
    <View style={styles.searchContainer}>
      <FontAwesome5 name="search" size={30} color="#DBDBDB" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search recipe"
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.filterIcon} onPress={toggleOverlay}>
        <Image
          source={require("../assets/icons/Filter.png")}
        />
      </TouchableOpacity>
      <OverLay isVisible={overlayVisible} onClose={toggleOverlay} onSubmit={() => { /* Handle filter submit */ }} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: '5%',
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 12,
    gap: 10,
    padding: 8,
    width: 270,
    height: 55,
    backgroundColor: 'whitesmoke',
    right: 43
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
    marginLeft: 293,
    width: 50,
    height: 45,
  },
});

export default Search;
