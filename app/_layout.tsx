import { userStore } from "@/stores/userstore";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const firstTimer = userStore((state) => state.firstTimer);
  const [loaded] = useFonts({
    Light: require("../assets/fonts/NeueHaasDisplayLight.ttf"),
    Regular: require("../assets/fonts/NeueHaasDisplayRoman.ttf"),
    Medium: require("../assets/fonts/NeueHaasDisplayMedium.ttf"),
    Bold: require("../assets/fonts/NeueHaasDisplayBold.ttf"),
  });
  SplashScreen.setOptions({
    fade: true,
    duration: 400,
  });
  React.useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [loaded]);
  return (
    <KeyboardProvider>
      <Stack>
        <Stack.Protected guard={firstTimer}>
          <Stack.Screen name="tabs" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!firstTimer}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </KeyboardProvider>
  );
}
