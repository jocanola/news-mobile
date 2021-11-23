import React from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import { View } from "react-native";
export default function Loading() {
  //State for ActivityIndicator animation

  return (
    <View style={{ width: "80%", height: "80%" }}>
      <LottieView
        source={require("../../../assets/splash.json")}
        autoPlay
        loop
      />
    </View>
  );
}
