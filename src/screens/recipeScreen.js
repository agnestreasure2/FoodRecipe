import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Tags from "../components/tags";
import RecipeVideos from "../components/recipeVideo";
import Recipe from "../components/recipe";

const RecipeScreen = () => {
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
          style={[styles.filterButton, filter === "RecipeVideos" && styles.activeFilter]}
          onPress={() => setFilter("RecipeVideos")}
        >
          <Text style={[styles.filterText, filter === "RecipeVideos" && styles.activeFilterText]}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, filter === "Tags" && styles.activeFilter]}
          onPress={() => setFilter("Tags")}
        >
          <Text style={[styles.filterText, filter === "Tags" && styles.activeFilterText]}>Tags</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {filter === "Recipe" && <Recipe />} 
        {filter === "RecipeVideos" && <RecipeVideos />}
        {filter === "Tags" && <Tags />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: -20, 
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 110,
    height: 39,
    borderWidth: 1,
    borderColor: "#009688",
  },
  filterText: {
    color: "#009688",
    textAlign: 'center',
    fontSize: 15,
  },
  activeFilter: {
    backgroundColor: "#009688",
  },
  activeFilterText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default RecipeScreen;
