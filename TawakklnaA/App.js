import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Services from "./screens/Services";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Services") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Dashboard") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Wallet") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Dashboard" component={Home} />
        <Tab.Screen name="Wallet" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
