import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CategoryState {
  aaa: any;
}

const initialState: CategoryState = {
  aaa: 1,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<any>) => {
      state.aaa = action.payload;
    },
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
