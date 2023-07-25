import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppLockingState } from 'src/Hooks/useAppLockingState';
import { PinState } from '../Services/Redux/slicers/pinReducer';
import { RootState } from '../Services/Redux/store';
import { AppStack, PinStack } from './NavigationStacks';
import { useMyFlipperPlugin } from '@dom-test-app/dom-flipper-plugin';

const PinHandler = () => {
  const pinState = useSelector((state: RootState) => state.pin.pinState);

  useAppLockingState();
  const { sendAppLockedStateData } = useMyFlipperPlugin();

  const hasEnteredPin = pinState === PinState.ACCEPTED;

  useEffect(() => {
    sendAppLockedStateData(pinState);
    //eslint-disable-next-line
  }, [pinState]);

  return hasEnteredPin ? <AppStack /> : <PinStack />;
};

export default PinHandler;
