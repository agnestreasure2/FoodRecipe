import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Recipe from "../components/recipe";
import Noti from "./notification";

const RecipeScreen= () => {
  const [filter, setFilter] = useState("Recipe");

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === "Recipe" && styles.activeFilter]}
          onPress={() => setFilter("Recipe")}
        >
          <Text style={[styles.filterText, filter === "Recipe" && styles.activeFilterText]}>Recipe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, filter === "Noti" && styles.activeFilter]}
          onPress={() => setFilter("Noti")}
        >
          <Text style={[styles.filterText, filter === "Noti" && styles.activeFilterText]}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, filter === "Noti" && styles.activeFilter]}
          onPress={() => setFilter("Noti")}
        >
          <Text style={[styles.filterText, filter === "Noti" && styles.activeFilterText]}>Tags</Text>
        </TouchableOpacity>
      </View>
      {filter === "Recipe" && <Recipe />}
      {filter === "Noti" && <Noti />}
      {filter === "Noti" && <Noti />}

     
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

export default RecipeScreen;
