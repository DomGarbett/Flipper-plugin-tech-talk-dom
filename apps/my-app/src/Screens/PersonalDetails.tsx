import * as React from 'react';
import {View, Text} from 'react-native';
import {useAuth0} from 'react-native-auth0'

const PersonalDetails = () => {
  const {user} = useAuth0();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    
        <>
          <Text>First Name : {user.name}</Text>
          <Text>First Name : {user.email}</Text>
        </>
        </View>
      );
  }

export default PersonalDetails;
