import * as React from 'react';
import { useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import { styles } from './login.styles';
import { login } from '../../Services/authenticationService';
import { useAuth0 } from 'react-native-auth0';

const Login = () => {
  const { authorize } = useAuth0();

  const onLoginPress = async () => {

    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.welcome}>Welcome</Text>
      <Button
        onPress={async () => await onLoginPress()}
        title="Login"
        color="#841584"
      />
    </View>
  );
};

export default Login;
