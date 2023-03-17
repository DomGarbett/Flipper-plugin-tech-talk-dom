import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { AppStates } from 'src/Services/types';

type CombinedAppState = [
  currentState: AppStateStatus,
  previousState: AppStateStatus
];

export const useAppState = (): CombinedAppState => {
  const [appState, setAppState] = useState<CombinedAppState>([
    AppState.currentState,
    AppStates.Active,
  ]);

  useEffect(() => {
    const subscriptions = AppState.addEventListener('change', (newAppState) => {
      setAppState(([existingAppState]) => [newAppState, existingAppState]);
    });
    return () => {
      subscriptions.remove();
    };
  }, [appState]);

  return appState;
};
