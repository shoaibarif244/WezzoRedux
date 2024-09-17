import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { StoreConfig } from '../../../allTypes/gql/graphql';
import {
  BuyForMeContainer,
  BuyForMeProduct,
} from '../../../allTypes/AccountDropShippingHistory/types';

interface BuyForMeState {
  isBuyForMeModalVisible: boolean;
  buyForMeData: BuyForMeContainer | null;
  url: string;
}

const initialState: BuyForMeState = {
  isBuyForMeModalVisible: false,
  buyForMeData: null,
  url: '',
};

export const buyForMeSlice = createSlice({
  name: 'buyForMe',
  initialState,
  reducers: {
    setIsBuyForMeModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isBuyForMeModalVisible = action.payload;
    },
    setBuyForMeData: (state, action: PayloadAction<BuyForMeContainer>) => {
      state.buyForMeData = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setIsBuyForMeModalVisible, setBuyForMeData, setUrl } =
  buyForMeSlice.actions;
export default buyForMeSlice.reducer;
