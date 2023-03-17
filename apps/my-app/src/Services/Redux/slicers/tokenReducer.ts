import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const {setToken} = tokenSlice.actions;
export default tokenSlice.reducer;
