import * as React from 'react';
import {Text, Button, View} from 'react-native';
import {unlockDevice} from '../../Services/pinService';

const Pin = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f93',
      }}>
      <Text style={{}}>Pin Screen</Text>
      <Button
        onPress={async () => unlockDevice()}
        title="Unlock Pin"
        color="#324567"
      />
      <View />
    </View>
  );
};

export default Pin;
