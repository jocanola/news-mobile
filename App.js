import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { NewsCard } from "./app/components/features/news/NewsCard";
import { theme } from "./app/infrastructures/theme";
import { LoginScreen } from "./app/screens/Login";
import NewsScreen from "./app/screens/NewsScreen";
import { RegisterScreen } from "./app/screens/SignUp";
import SplashScreen from "./app/screens/SplashScreen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Index from "./app/infrastructures/navigations/Index";

export default function App() {
  let [loadOswald] = useOswald({
    Oswald_400Regular,
  });
  let [loadLato] = useLato({
    Lato_400Regular,
  });
  if (!loadOswald) {
    return null;
  }

  if (!loadLato) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
}
