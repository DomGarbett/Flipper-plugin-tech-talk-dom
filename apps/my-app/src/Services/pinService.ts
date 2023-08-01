import { useMyFlipperPlugin } from '../../../../libs/dom-flipper-plugin/src/useMyFlipperPlugin';
import {PinState, setPinState} from './Redux/slicers/pinReducer';
import {store} from './Redux/store';


const lockDevice = () => {
store.dispatch(setPinState(PinState.LOCKED));

};

const unlockDevice = () => {
  store.dispatch(setPinState(PinState.ACCEPTED));
};

const toggleDevice = () => {
  if (store.getState().pin.pinState === PinState.ACCEPTED) {
    lockDevice();
  } else {
    unlockDevice();
  }
};

export { lockDevice, unlockDevice, toggleDevice };

