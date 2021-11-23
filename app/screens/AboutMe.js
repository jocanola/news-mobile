import React from "react";
import { View, Text, Linking } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.space[4]};
`;
const Section = styled(View)``;
const Header = styled(Text)`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  text-align: center;
  padding: ${({ theme }) => theme.space[3]};
  font-family ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size:${({ theme }) => theme.fontSizes.title};
  width: 100%;
  color:white;
`;

const AvatarImg = styled(Avatar.Image)`
  margin-bottom: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[3]};
`;
const Info = styled(Text)`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin-left: ${({ theme }) => theme.space[1]}
  margin-right: ${({ theme }) => theme.space[1]}
`;

const ListIcon = styled(View)`
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  justify-content: space-around;
`;
const NextIcon = styled(TouchableOpacity)`
  margin-bottom: ${({ theme }) => theme.space[3]};
  align-items: center;
`;

export default function AboutMe({ navigation }) {
  const color = "#696AC3";

  const url = {
    gitHub: "https://www.github.com/jocanola",
    linkedIn: "https://www.linkedin.com/in/jokanolayusuff/",
    portfolio: "https://jocanola.github.io",
  };

  const openUrl = (url) =>
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  const getStarted = () => navigation.navigate("Register");
  return (
    <>
      <Container>
        <Header>Jokanola Yusuff Olatunji</Header>
        <AvatarImg
          size={150}
          source={require("../../assets/JokanolaImg.jpg")}
        />
        <Info>
          I'm a front-end developer, with knowledge of HTML, CSS, JavaScript,
          ReactJs, React Native (Mobile App) and Nodejs. I am passionate, quick
          thinking, humanitarian, tolerant, analytic, observant and determined
          to succeed. I have a vast capacity to learn, solve tasks with the aim
          of achieving certain goal. Learn more about me below.
        </Info>
        <ListIcon>
          <TouchableOpacity>
            <FontAwesome
              name="github"
              size={40}
              color={color}
              onPress={() => openUrl(url.gitHub)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="linkedin"
              size={40}
              color={color}
              onPress={() => openUrl(url.linkedIn)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="passport"
              size={40}
              color={color}
              onPress={() => openUrl(url.portfolio)}
            />
          </TouchableOpacity>
        </ListIcon>
      </Container>
      <NextIcon onPress={getStarted}>
        <Ionicons name="arrow-forward-circle" size={60} color="black" />
      </NextIcon>
    </>
  );
}
