import styled from "styled-components/native";
import {  TextInput, Text, Button } from "react-native-paper";
import { View, StatusBar } from "react-native";
import { colors } from "../../../infrastructures/theme/colors";

// export const AccountBackground = styled.ImageBackground.attrs({
//   //   source: require("../../../../assets/home_bg.jpg"),
// })`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

export const AccountCover = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  text-align: center;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
export const SaveArea = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  align-items: center;
  justify-content: center;
`;
