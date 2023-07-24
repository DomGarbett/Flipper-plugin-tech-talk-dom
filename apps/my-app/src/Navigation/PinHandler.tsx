import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppLockingState } from 'src/Hooks/useAppLockingState';
import { PinState } from '../Services/Redux/slicers/pinReducer';
import { RootState } from '../Services/Redux/store';
import { AppStack, PinStack } from './NavigationStacks';

const PinHandler = () => {
  const pinState = useSelector((state: RootState) => state.pin.pinState);

  useAppLockingState();

  const hasEnteredPin = pinState === PinState.ACCEPTED;


  return hasEnteredPin ? <AppStack /> : <PinStack />;
};

export default PinHandler;
