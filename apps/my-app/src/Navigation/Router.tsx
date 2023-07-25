import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import { AuthStack } from './NavigationStacks';
import PinHandler from './PinHandler';
import { useAuth0 } from 'react-native-auth0';
import { useFlipper } from '@react-navigation/devtools';

const Router = () => {
  const { user } = useAuth0();
  const isLoggedOut = !user;
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedOut ? <AuthStack /> : <PinHandler />}
    </NavigationContainer>
  );
};

export default Router;
