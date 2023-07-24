import { Flipper, addPlugin } from 'react-native-flipper';
import { useEffect, useState } from 'react';

const pluginId = 'dom-react-native-flipper-plugin';

export const useMyFlipperPlugin = () => {
  let indexNum = 0;

  const [connection, setConnection] = useState<Flipper.FlipperConnection>();

  useEffect(() => {
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

        conn.send('newRow', {
          id: indexNum++,
          title: 'test',
          url: 'https://placehold.co/600x400',
        });
      },
      onDisconnect() {
        console.log('disconnected');
      },
    });
  }, []);
};
