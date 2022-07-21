import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { Black, White } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: isDark ? "#d2dae2" : "#1e272e" }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#d2dae2" : "#1e272e",
        },
        tabBarActiveTintColor: isDark ? "#1e272e" : "#d2dae2",
        tabBarInActiveTintColor: isDark ? "#1e272e" : "#d2dae2",
        headerStyle: {
          backgroundColor: isDark ? "#d2dae2" : "#1e272e",
          borderBottomColor: isDark ? "#d2dae2" : "#1e272e",
        },
        headerTitleStyle: {
          color: isDark ? "#1e272e" : "#d2dae2",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
