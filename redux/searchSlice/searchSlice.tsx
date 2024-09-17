import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface searchSliceState {
  searchedText: string;
  isSearchMode: boolean;
}
const initialState: searchSliceState = {
  searchedText: '',
  isSearchMode: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchedText: (state, action: PayloadAction<string>) => {
      state.searchedText = action.payload;
    },
    setIsSearchMode: (state, action: PayloadAction<boolean>) => {
      state.isSearchMode = action.payload;
    },
  },
});

export const { setSearchedText, setIsSearchMode } = searchSlice.actions;

export default searchSlice.reducer;
