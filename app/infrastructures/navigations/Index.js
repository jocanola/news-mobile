import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// import AuthComponent from "../components/Auth/AuthComponent";

import SplashScreen from "../../screens/SplashScreen";
import AuthNavigation from "./AuthNavigation";
import HomeNavigation from "./HomeNavigation";
import AboutMe from "../../screens/AboutMe";

export default function Index() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="Main"
          component={HomeNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
