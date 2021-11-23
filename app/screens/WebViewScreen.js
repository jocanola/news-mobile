import React from "react";
import { WebView } from "react-native-webview";

export default function WebPage({ route }) {
  const { url } = route.params;
  console.log(url);
  return <WebView source={{ uri: `${url}` }} />;
}
