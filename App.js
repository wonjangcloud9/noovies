import AppLoading from "expo-app-loading";
import React from "react";
import { useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./styled";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const isDark = useColorScheme() === "dark";
  const [asset] = useAssets([require("./me.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  if (!asset || !loaded) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
