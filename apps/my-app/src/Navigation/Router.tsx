import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import { useFlipper } from '@react-navigation/devtools';
import AppRouter from './AppRouter';

const Router = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppRouter />
    </NavigationContainer>
  );
};

export default Router;
