import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Movies"
    screenOptions={{
      tabBarLabelStyle: {
        backgroundColor: "red",
      },
    }}
  >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen
      name="Tv"
      component={Tv}
      options={{
        tabBarLabelStyle: {
          backgroundColor: "purple",
        },
        tabBarBadge: 5,
      }}
    />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
