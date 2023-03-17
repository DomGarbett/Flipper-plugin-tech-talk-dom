import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './NavigationStacks';
import PinHandler from './PinHandler';
import { useAuth0 } from 'react-native-auth0';

const Router = () => {
  const { user } = useAuth0();
  const isLoggedOut = !user;

  return (
    <NavigationContainer>
      {isLoggedOut ? <AuthStack /> : <PinHandler />}
    </NavigationContainer>
  );
};

export default Router;
