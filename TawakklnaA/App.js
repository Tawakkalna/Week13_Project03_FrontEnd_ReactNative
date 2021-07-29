import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
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
        tabBarOptions={{
          activeTintColor: "#23AA9C",
          inactiveTintColor: "#516477",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? require("./assets/icons/active/home.png")
                : require("./assets/icons/notActive/home.png");
            } else if (route.name === "Profile") {
              iconName = focused
                ? require("./assets/icons/active/myAccount.png")
                : require("./assets/icons/notActive/myAccount.png");
            } else if (route.name === "Services") {
              iconName = focused
                ? require("./assets/icons/active/services.png")
                : require("./assets/icons/notActive/services.png");
            } else if (route.name === "Dashboard") {
              iconName = focused
                ? require("./assets/icons/active/dashboard.png")
                : require("./assets/icons/notActive/dashboard.png");
            } else if (route.name === "Wallet") {
              iconName = focused
                ? require("./assets/icons/active/wallet.png")
                : require("./assets/icons/notActive/wallet.png");
            }

            // You can return any component that you like here!
            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
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
