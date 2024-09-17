import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface wezzoWalletSliceState {
  code: string;
}
const initialState: wezzoWalletSliceState = {
  code: '',
};

const wezzoWalletSlice = createSlice({
  name: 'wezzoWalletSlice',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
  },
});

export const { setCode } = wezzoWalletSlice.actions;

export default wezzoWalletSlice.reducer;
