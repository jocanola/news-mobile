import React from 'react'
import { StatusBar, View } from 'react-native';
import styled from 'styled-components';


export const SaveArea = styled(View)`
 flex: 1;
 margin-top: ${StatusBar.currentHeight}px;
`;

export const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
  width: 100%;
`;

export const NewsListContainer = styled(View)`
   flex: 1;
 padding: ${({ theme }) => theme.space[3]};
    background-color:${({ theme }) => theme.colors.bg.primary};
    width: 100%;
`;

 export const LoadView = styled(View)`
 justify-content: center;
 margin: 10px;
 `