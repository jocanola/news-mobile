import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { LoginScreen } from "../../screens/Login";
import NewsScreen from "../../screens/NewsScreen";
import { RegisterScreen } from "../../screens/SignUp";
import WebPage from "../../screens/WebViewScreen";

export default function HomeNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WebPage"
        component={WebPage}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
