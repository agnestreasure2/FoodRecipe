import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Bg from "../assets/icons/Bg.svg";
import HomeScreen from "../screens/homeScreen";
import SaveScreen from "../screens/save";
import NotiScreen from "../screens/notification";
import ProfileScreen from "../screens/profile";
import MyTabBar from "../components/svgSample";
import Search from "../components/search";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#009688',
headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          height: 106,
          borderColor: "transparent",
          borderWidth: 0,
          //   opacity: 1,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarBackground: () => (
            <Image
              style={{ width: "100%", height: "100%" }}
              source={true ? require("../assets/images/Bg.png") : require("../assets/images/Bg.png")}
            />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{ width: 24, height: 24 }}
              source={true ? require("../assets/images/home.png") : require("../assets/images/home.png")}
            />
          ),
          tabBarItemStyle: {
            // backgroundColor: "transparent",
          },
        }}
      />

      <Tab.Screen
        name="Save"
        component={SaveScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 24, height: 24 }}
              source={true ? require("../assets/images/save.png") : require("../assets/images/save.png")}
            />
          ),
          tabBarItemStyle: {
            // backgroundColor: "white",
          },
        }}
      />

      <Tab.Screen
        name="Add"
        component={Search}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabBarButtonContainer}>
              <View style={styles.plusIconContainer}>
                <FontAwesome5
                  name="plus"
                  size={16}
                  color="white"
                  style={styles.plusIcon}
                />
              </View>
            </View>
            // <View/>
          ),
          tabBarItemStyle: {
            // backgroundColor: "white",
          },
        }}
      />

      <Tab.Screen
        name="Noti"
        component={NotiScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" size={size} color={color} />
          ),
          tabBarItemStyle: {
            // backgroundColor: "white",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 24, height: 24 }}
              source={true ? require("../assets/images/user.png") : require("../assets/images/user.png")}
            />
          ),
          tabBarItemStyle: {
            // backgroundColor: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarButtonContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "absolute",
    left: "50%",
    marginLeft: -110,
    bottom: -18,
    zIndex: 1,
    borderRadius: 200,
  },
  plusIconContainer: {
    // position: "absolute",
    borderRadius: 100,
    overflow: "hidden",
    width: 50,
    height: 50,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 55,
    // bottom: 6,
    // right: -15,
  },
  plusIcon: {
    textAlign: "center",
    lineHeight: 50,
  },
});

export default BottomTabs;
