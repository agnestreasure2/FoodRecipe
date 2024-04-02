import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ingredients from "../components/ingredients";
import Procedures from "../components/procedure";

const FoodDetails= () => {
  const [filter, setFilter] = useState("Ingredients");

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === "Ingredients" && styles.activeFilter]}
          onPress={() => setFilter("Ingredients")}
        >
          <Text style={[styles.filterText, filter === "Ingredients" && styles.activeFilterText]}>Ingredient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === "Procedures" && styles.activeFilter]}
          onPress={() => setFilter("Procedures")}
        >
          <Text style={[styles.filterText, filter === "Procedures" && styles.activeFilterText]}>Procedure</Text>
        </TouchableOpacity>
      </View>
      {filter === "Ingredients" && <Ingredients />}
      {filter === "Procedures" && <Procedures />}

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'space-around',
  },

  filterButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 10,
    width: 170,
    height: 39,
    backgroundColor: '#fff',
    bottom: 30
  },

  filterText: {
    color: "#009688",
    textAlign: 'center',
    bottom: 2,
    fontSize: 15
  },
  activeFilter: {
    backgroundColor: "#009688",
  },
  activeFilterText: {
    color: "#fff",
  },
});

export default FoodDetails;
