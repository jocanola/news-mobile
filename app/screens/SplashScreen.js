// import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Loading from "../components/sharedComponents/Loading";
import * as SQLite from "expo-sqlite";

export default function SplashScreen({ navigation }) {
  const [animating, setAnimating] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getData();
      createTable();
      // deleteTable();
    }, 2500);
  }, []);
//Open the SQLite Database
  const db = SQLite.openDatabase("db.testDB");

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "Users " +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Password INTEGER);"
      );
    });
  };

  const deleteTable = () => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM users");
    });
  };

   
  const getData = async () => {
    
    try {
      await db.transaction((tx) => {
        tx.executeSql(
          "SELECT Email, Password FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            console.log("starting working to this level", len);
            if (len > 0) {
              navigation.replace("Main");
              var userEmail = results.rows.item(0).Email;
              var Password = results.rows.item(0).Password;
              setPassword(userEmail);
              setEmail(Password);
             
            }
            if (len <= 0) {
              navigation.replace("Auth");
              
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
 
  const SplashContainer = styled(View)`
    display: flex;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    justify-content: center;
    align-items: center;
  `;
  const AppName = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-family: ${({ theme }) => theme.fonts.heading};
  `;
  return (
    <SplashContainer>
      <Loading />
      <AppName>News-Mobile</AppName>
    </SplashContainer>
  );
}
