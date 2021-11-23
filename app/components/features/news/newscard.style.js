import styled from "styled-components";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-paper";

export const CardContainer = styled(Card)`
  margin-top: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.ui.tertiary};
  padding: ${({ theme }) => theme.space[3]};
`;
export const CardCover = styled(View)`
  height: 80px;
`;

export const ActionButton = styled(Button)``;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Section = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-right: ${({ theme }) => theme.space[2]};
`;
