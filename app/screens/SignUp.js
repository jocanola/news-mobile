import React, { useState, useEffect } from "react";
import { Text } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
  SaveArea,
} from "../components/features/accounts/styles";

import { Spacer } from "../components/typography/spacer";
import * as SQLite from "expo-sqlite";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [enable, setEnable] = useState(true);

  const db = SQLite.openDatabase("db.testDB");
  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "Users " +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Password INTEGER);"
      );
    });
  };

  //submit data to database
  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        await db.transaction(async (tx) => {
          await tx.executeSql(
            "INSERT INTO Users (Email, Password) VALUES (?,?)",
            [email, password]
          );
        });
        navigation.replace("Main");
      } catch (error) {
        console.log(error);
      }
    }
  };



  const enableButton = (
  email === '' ? 1 : // if 
  password === '' ? 2 : // else if 
  password === repeatedPassword ? false : // else if
  true // else 
)



  return (
    <SaveArea>
      <AccountCover />
      <Title>Sign Up</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        {/* {error && (
          <ErrorContainer size="large">
            <Text variant="error">{errorMessage}</Text>
          </ErrorContainer>
        )} */}
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>

        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            disabled={enableButton}
            onPress={setData}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
      </Spacer>
    </SaveArea>
  );
};
