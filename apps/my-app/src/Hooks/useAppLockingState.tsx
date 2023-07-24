import React, { useEffect, useState } from 'react';
import { AppStates } from 'src/Services/types';
import { useAppState } from './useAppState';
import { lockDevice } from '../Services/pinService';
import BackgroundTimer from 'react-native-background-timer';
import { useMyFlipperPlugin } from '../../../../libs/dom-flipper-plugin/src/useMyFlipperPlugin';

export const useAppLockingState = () => {
  const idleThresholdInMs = 1000;

  const [currentState] = useAppState();
  const { sendAppLockedStateData } = useMyFlipperPlugin();

  const hasTransitionedBackground = currentState === AppStates.Background;
  const hasTransitionedInactive = currentState === AppStates.Inactive;
  const hasTransitionedActive = currentState === AppStates.Active;

  const [shouldShowPin, setShouldShowPin] = useState(false);

  //app goes inactive
  useEffect(() => {
    if (hasTransitionedInactive) {
      //lockDevice();
      // should display splash screen herre
    }
  }, [hasTransitionedInactive]);

  // app goesinto background
  useEffect(() => {
    if (hasTransitionedBackground && !shouldShowPin) {
      BackgroundTimer.runBackgroundTimer(() => {
        setShouldShowPin(true);
        lockDevice();
      }, idleThresholdInMs);
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [hasTransitionedBackground, shouldShowPin]);
};
