import * as React from 'react';
import {View, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {lockDevice} from '../Services/pinService';

const Home = ({navigation}) => {
  const {clearSession} = useAuth0();

  const logoutPress = async () => {
    await clearSession();
  };
  const goToPersonalDetails = () => {
    navigation.navigate('PersonalDetails');
  };

  const goToCharacters = () => {
    navigation.navigate('Characters');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green', height: 100}}>
     
      <Button onPress={goToCharacters} title="Characters" color="#841584" />
      <Button
        onPress={goToPersonalDetails}
        title="Personal Details"
        color="#841584"
      />
      <Button onPress={lockDevice} title="Lock App" color="#f93" />
      <Button onPress={logoutPress} title="Logout" color="#841584" />
    </View>
  );
};

export default Home;
