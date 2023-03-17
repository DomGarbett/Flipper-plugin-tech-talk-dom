import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum PinState {
  ACCEPTED,
  LOCKED,
}

const pinSlice = createSlice({
  name: 'pin',
  initialState: {
    pinState: PinState.ACCEPTED,
  },
  reducers: {
    setPinState(state, action: PayloadAction<PinState>) {
      state.pinState = action.payload;
    },
  },
});

export const {setPinState} = pinSlice.actions;
export default pinSlice.reducer;
