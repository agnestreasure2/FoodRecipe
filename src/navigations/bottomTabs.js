import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import { FontAwesome5 } from '@expo/vector-icons'
import SaveScreen from "../screens/save";
import ProfileScreen from "../screens/profile";
import Noti from "../screens/notification";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false, 
                tabBarInactiveTintColor: 'gray', // Set inactive color to gray
                tabBarActiveTintColor: '#009688', 
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Save"
                component={SaveScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Noti"
                component={Noti}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bell" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs;
