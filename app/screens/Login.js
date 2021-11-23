import React, { useState, useContext } from "react";

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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateEmailInput = (e) => {
    setEmail(e);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      setError(true);
      setErrorMessage("Invalid email address");
    } else {
      //   this.setState({ email: text });
      setError(false);
    }
  };

  return (
    <SaveArea>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => updateEmailInput(u)}
        />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{errorMessage}</Text>
          </ErrorContainer>
        )}
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
          {/* {isLoading ? ( */}
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            // onPress={validates}
            disabled={(email.length && password.length) === 0}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </SaveArea>
  );
};
