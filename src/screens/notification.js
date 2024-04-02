import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import UnreadScreen from "../components/unreadNoti";
import ReadScreen from "../components/readNoti";
import AllNotiScreen from "../components/allNoti";

const Noti = () => {
  const [filter, setFilter] = useState("All");

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Notifications</Text>

        <ScrollView>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === "All" && styles.activeFilter]}
          onPress={() => setFilter("All")}
        >
          <Text style={[styles.filterText, filter === "All" && styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === "Read" && styles.activeFilter]}
          onPress={() => setFilter("Read")}
        >
          <Text style={[styles.filterText, filter === "Read" && styles.activeFilterText]}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === "Unread" && styles.activeFilter]}
          onPress={() => setFilter("Unread")}
        >
          <Text style={[styles.filterText, filter === "Unread" && styles.activeFilterText]}>Unread</Text>
        </TouchableOpacity>
      </View>
     
      {filter === "All" && <AllNotiScreen />}
      {filter === "Read" && <ReadScreen />}
      {filter === "Unread" && <UnreadScreen />}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    top: 50
  },

  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  filterButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 10,
    width: 100,
    height: 35
    
  },
  filterText: {
    color: "#009688",
    textAlign: 'center',
    bottom: 2
  },
  activeFilter: {
    backgroundColor: "#009688",
  },
  activeFilterText: {
    color: "#fff",
  },
});

export default Noti;
