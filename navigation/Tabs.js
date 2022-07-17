import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { Black, White } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? Black : White,
        },
        tabBarActiveTintColor: isDark ? White : Black,
        tabBarInActiveTintColor: isDark ? White : Black,
        headerStyle: {
          backgroundColor: isDark ? Black : White,
          borderBottomColor: isDark ? Black : White,
        },
        headerTitleStyle: {
          color: isDark ? White : Black,
        },
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
