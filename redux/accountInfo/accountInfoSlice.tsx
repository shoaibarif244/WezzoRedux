import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AccountInfoState {
  isEditMode: boolean;
}

const initialState: AccountInfoState = {
  isEditMode: false,
};

export const accountInfoSlice = createSlice({
  name: 'accountInfo',
  initialState,
  reducers: {
    setIsEditMode: (state, action: PayloadAction<boolean>) => {
      state.isEditMode = action.payload;
    },
  },
});

export const { setIsEditMode } = accountInfoSlice.actions;
export const selectCustomerToken = (state: RootState) =>
  state.user.customerToken;
export const selectIsSigningIn = (state: RootState) => state.user.isSigningIn;
export const selectSigningError = (state: RootState) => state.user.signingError;

export default accountInfoSlice.reducer;
