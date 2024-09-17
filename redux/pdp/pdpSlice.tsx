import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSizeHanle: '',
};

export const pdpSlice = createSlice({
  name: 'pdp',
  initialState: initialState,
  reducers: {
    setSelectedSizeHandle: (state, action) => {
      state.selectedSizeHanle = action.payload;
    },
  },
});

export const { setSelectedSizeHandle } = pdpSlice.actions;

export default pdpSlice.reducer;
