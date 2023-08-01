import { Flipper, addPlugin } from 'react-native-flipper';
import { useEffect, useState } from 'react';
import { PinState } from 'src/Services/Redux/slicers/pinReducer';
import { toggleDevice } from 'src/Services/pinService';
import { useNavigation } from '@react-navigation/core';

const pluginId = 'dom-rn-plugin'; // needs to be same on both client and server

export const useMyFlipperPlugin = () => {
  const [currentConnection, setConnection] =
    useState<Flipper.FlipperConnection | null>();
  const navigation = useNavigation();
  useEffect(() => {
    if (__DEV__) {
      if (!currentConnection) {
        addPlugin({
          getId() {
            return pluginId;
          },
          onConnect(conn) {
            setConnection(conn);

            conn.receive('toggleLock', (_data, responder) => {
              toggleDevice();
              // respond with some data
              responder.success({
                ack: true,
              });
            });

            conn.receive('characterNav', (_data, responder) => {
              // respond with some data
              // in here we should
              const item = _data.id;
              navigation.navigate('CharacterInfo', {
                character: { id: item },
              });
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
    } //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  const sendAnalyticsData = (value: string, eventType: string) => {
    if (currentConnection) {
      currentConnection.send('adobeDataRow', {
        id: new Date(),
        analyticsTag: value,
        eventType: eventType,
        date: new Date(),
      });
    }
  };

  const sendAppLockedStateData = (state: PinState) => {
    if (currentConnection) {
      currentConnection.send('lockedStateRow', {
        id: new Date(),
        date: new Date(),
        newState: state.toString(),
      });
    }
  };

  return { sendAnalyticsData, sendAppLockedStateData };
};
