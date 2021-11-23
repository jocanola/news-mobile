import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import AboutMe from "../../screens/AboutMe";
import { LoginScreen } from "../../screens/Login";
import NewsScreen from "../../screens/NewsScreen";
import { RegisterScreen } from "../../screens/SignUp";

export default function AuthNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="aboutme"
        component={AboutMe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
