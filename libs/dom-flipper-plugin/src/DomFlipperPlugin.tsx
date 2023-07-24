import { addPlugin } from 'react-native-flipper';

const pluginId = 'dom-react-native-flipper-plugin';

let indexNum = 0;

const DomFlipperPlugin = () => {
  addPlugin({
    getId() {
      return pluginId;
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

      connection.send('newRow', {
        id: indexNum++,
        title: 'test',
        url: 'https://placehold.co/600x400',
      });
    },
    onDisconnect() {
      console.log('disconnected');
    },
  });
};

export default DomFlipperPlugin;
