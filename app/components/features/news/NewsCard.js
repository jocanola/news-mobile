import React from "react";
import useNews from "../../customhooks/useNewsHook";
import {
  CardContainer,
  CardCover,
  Title,
  ActionButton,
} from "./newscard.style";

export const NewsCard = ({ navigation, item }) => {
  //pass url of each new as params to webview
  const url = item?.url;
  const openNews = () => {
    navigation.navigate("WebPage", { url: url });
  };
  return (
    <CardContainer>
      <CardCover>
        <Title>{item?.title}</Title>
      </CardCover>
      <ActionButton onPress={openNews}>Read More</ActionButton>
    </CardContainer>
  );
};
