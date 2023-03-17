import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login/Login';
import React from 'react';
import PersonalDetails from '../Screens/PersonalDetails';
import Characters from '../Screens/Characters/Characters';
import Pin from '../Screens/Pin/Pin';
import CharacterInfo from 'src/Screens/CharacterInfo/CharacterInfo';

const Stack = createStackNavigator();

const PinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pin" component={Pin} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { AuthStack, AppStack, PinStack };
