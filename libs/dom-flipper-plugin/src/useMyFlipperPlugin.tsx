import { addPlugin } from 'react-native-flipper';
import { useEffect, useState } from 'react';

export const useMyFlipperPlugin = () => {
  const mammmals = [{ title: 'dome' }];

  useEffect(() => {
    addPlugin({
      getId() {
        return 'DomPluginExample';
      },
      onConnect(connection) {
        console.log('connected');
        connection.receive('getData', (data, responder) => {
          console.log('incoming data', data);
          // respond with some data
          responder.success({
            ack: true,
          });
        });

        connection.send('newRow', { message: 'Hello' }); // send back to the server
      },
      onDisconnect() {
        console.log('disconnected');
      },
    });
  }, []);
};
