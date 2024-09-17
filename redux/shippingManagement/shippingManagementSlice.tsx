import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { StoreConfig } from '../../../allTypes/gql/graphql';
import {
  BuyForMeContainer,
  BuyForMeProduct,
} from '../../../allTypes/AccountDropShippingHistory/types';
import { PackageForwardingContainer } from '../../../allTypes/AccountPackageForwardingHistory/types';

interface ShippingManagementState {
  isShippingManagementModalVisible: boolean;
  shippingManagementData: PackageForwardingContainer | null;
}

const initialState: ShippingManagementState = {
  isShippingManagementModalVisible: false,
  shippingManagementData: null,
};

export const shippingManagementSlice = createSlice({
  name: 'shippingManagement',
  initialState,
  reducers: {
    setIsShippingManagementModalVisible: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isShippingManagementModalVisible = action.payload;
    },
    setShippingManagementData: (
      state,
      action: PayloadAction<PackageForwardingContainer>
    ) => {
      state.shippingManagementData = action.payload;
    },
  },
});

export const {
  setIsShippingManagementModalVisible,
  setShippingManagementData,
} = shippingManagementSlice.actions;
export default shippingManagementSlice.reducer;
