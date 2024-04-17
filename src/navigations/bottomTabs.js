import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import HomeScreen from "../screens/homeScreen";
import SaveScreen from "../screens/save";
import Search from "../components/search";
import Noti from "../screens/notification";
import ProfileScreen from "../screens/profile";

const BottomArray = [
  {
    route: "Home",
    component: HomeScreen,
    activeIcon: require(`../assets/icons/nav-icons/home-active.png`),
    inActiveIcon: require(`../assets/icons/nav-icons/home-inactive.png`),
  },
  {
    route: "Save",
    component: SaveScreen,
    activeIcon: require(`../assets/icons/nav-icons/bookmark-active.png`),
    inActiveIcon: require(`../assets/icons/nav-icons/bookmark-inactive.png`),
  },
  {
    route: "Add",
    component: Search,
    activeIcon: require(`../assets/icons/nav-icons/plus-active.png`),
    inActiveIcon: require(`../assets/icons/nav-icons/plus-inactive.png`),
  },
  {
    route: "Noti",
    component: Noti,
    activeIcon: require(`../assets/icons/nav-icons/notificatiion-active.png`),
    inActiveIcon: require(`../assets/icons/nav-icons/notification-inactive.png`),
  },
  {
    route: "Profile",
    component: ProfileScreen,
    activeIcon: require(`../assets/icons/nav-icons/profile-active.png`),
    inActiveIcon: require(`../assets/icons/nav-icons/profile-inactive.png`),
  },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { translateY: 0 }, 1: { translateY: -33.5 } };
const animate2 = { 0: { translateY: -33.5 }, 1: { translateY: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState, index } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
    } else {
      viewRef.current.animate(animate2);
    }
  }, [focused]);

  const iconSource = focused ? item.activeIcon : item.inActiveIcon;

  return (
    <TouchableOpacity
      onPress={(event) => {
        moveTabBackground(index);
        onPress(event);
      }}
      style={styles.container}
    >
      <Animatable.View ref={viewRef}>
        <Image source={iconSource} style={styles.image} />
      </Animatable.View>
    </TouchableOpacity>
  );
};

let moveTabBackground;

const BottomTabs = () => {
  const onPress = () => {
    console.log("green button presseed");
  };
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 106,
            position: "absolute",
            borderRadius: 30,
            backgroundColor: "transparent",
            borderColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            // left: 72
          },
          tabBarBackground: () => {
            const width = 82.5;
            const initial = 2;
            const [position, setPosition] = useState(0);
            const viewRef = useRef(null);

            useEffect(() => {
              viewRef.current.animate([
                { translateX: 0 },
                { translateX: -(width * initial) },
              ]);
            }, [width]);

            moveTabBackground = function (p) {
              console.log("move me to ", p);
              console.log("move me from ", position);
              let ppp = width * (initial - p);
              console.log("move me to ", ppp);
              viewRef.current.animate([
                { translateX: -(width * (initial - position)) },
                { translateX: -ppp },
              ]);
              setPosition(p);
            };

            return (
              <Animatable.View
                ref={viewRef}
                style={{
                  width: "100%",
                  
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "300%",
                    height: 106,
                    alignSelf:"center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: "100%",
                      backgroundColor: "#fff",
                    }}
                  />
                  <Image
                    style={{
                      flex: 1,
                      height: "100%",
                      
                    }}
                    source={
                      true
                        ? require("../assets/icons/Bg.png")
                        : require("../assets/icons/Bg.png")
                    }
                  />
                  <View
                    style={{
                      flex: 1,
                      height: "100%",
                      backgroundColor: "white",
                    }}
                  />
                </View>
                <View onPress={onPress} style={styles.addButtonContainer}>
                  <View style={styles.addButton}></View>
                </View>
              </Animatable.View>
            );
          },
        }}
      >
        {BottomArray.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarButton: (props) => (
                  <View style={{ flex: 1 }}>
                    {<TabButton {...props} item={item} index={index} />}
                  </View>
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: "center",
    alignSelf: "center",
    zIndex: 10,
  },
  addButton: {
    width: "15%",
    aspectRatio: 1,
    borderRadius: "50%",
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
