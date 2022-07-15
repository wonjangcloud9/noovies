import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync([require("./me.png")]);
    await Image.prefetch("https://i.imgur.com/tGbaZCY.jpg");
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={() => {
          setReady(true);
        }}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading</Text>;
}
