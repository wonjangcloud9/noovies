import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);
  const startLoading = async () => {};
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
