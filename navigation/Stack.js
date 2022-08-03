import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import { useColorScheme } from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? "#d2dae2" : "#1e272e",
        },
        headerTitleStyle: {
          color: isDark ? "#1e272e" : "#d2dae2",
        },
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
