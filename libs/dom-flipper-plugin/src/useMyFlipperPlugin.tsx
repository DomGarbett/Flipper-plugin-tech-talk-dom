import { Flipper, addPlugin } from 'react-native-flipper';
import { useEffect, useState } from 'react';

const pluginId = 'dom-rn-plugin';

export const useMyFlipperPlugin = () => {
  const [currentConnection, setConnection] =
    useState<Flipper.FlipperConnection>();

  useEffect(() => {
    if (!currentConnection) {
      addPlugin({
        getId() {
          return pluginId;
        },
        onConnect(conn) {
          setConnection(conn);

          conn.receive('getData', (data, responder) => {
            console.log('incoming data', data);
            // respond with some data
            responder.success({
              ack: true,
            });
          });
        },
        onDisconnect() {
          setConnection(null);
        },
      });
    }
  }, []);

  // TOOD hook this into adobe analytics
  const sendData = (value: string) => {
    if (currentConnection) {
      currentConnection.send('newRow', {
        id: new Date(),
        title: value,
        url: 'https://placehold.co/600x400',
      });
    }
  };

  const sendAppLockedStateData = (state: string) => {
    if (currentConnection) {
      currentConnection.send('newRow', {
        id: new Date(),
        title: 'App State Change',
        url: `App state has changed to ${state}`,
      });
    }
  };

  return { sendData, sendAppLockedStateData };
};
