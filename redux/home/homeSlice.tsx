import { createSlice } from '@reduxjs/toolkit';

interface homeSliceState {
  brandsData: any[];
  brandsCurrentPage: number;
  bestSellersData: any[];
  scrollToTopHome: boolean;
}
const initialState: homeSliceState = {
  brandsData: [],
  brandsCurrentPage: 1,
  bestSellersData: [],
  scrollToTopHome: false,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    setBrandsData: (state, action) => {
      state.brandsData = action.payload;
    },
    setBrandsCurrentPage: (state, action) => {
      state.brandsCurrentPage = action.payload;
    },
    pushToBestSellersData: (state, action) => {
      state.bestSellersData = [...state.bestSellersData, ...action.payload];
    },
    scrollToTopHome: (state) => {
      state.scrollToTopHome = !state.scrollToTopHome;
    },
  },
});

export const {
  setBrandsData,
  setBrandsCurrentPage,
  pushToBestSellersData,
  scrollToTopHome,
} = homeSlice.actions;

export default homeSlice.reducer;
