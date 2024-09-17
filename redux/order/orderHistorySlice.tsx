import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Order, PageBehaviour } from '../../../allTypes/AccountOrders/types';

interface OrderHistoryState {
  pageBehaviour: PageBehaviour;
  selectedOrder: Order | null;
  isTrackingModalVisible: boolean;
}

const initialState: OrderHistoryState = {
  pageBehaviour: 'HISTORY',
  selectedOrder: null,
  isTrackingModalVisible: false,
};

export const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    setPageBehaviour: (state, action: PayloadAction<PageBehaviour>) => {
      state.pageBehaviour = action.payload;
    },
    setSelectedOrder: (state, action: PayloadAction<Order | null>) => {
      state.selectedOrder = action.payload;
    },
    setIsTrackingModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isTrackingModalVisible = action.payload;
    },
    resetPageData: (state) => {
      state.pageBehaviour = 'HISTORY';
      state.selectedOrder = null;
    },
  },
});

export const {
  setPageBehaviour,
  setSelectedOrder,
  resetPageData,
  setIsTrackingModalVisible,
} = orderHistorySlice.actions;

export const selectStoreConfig = (state: RootState) => state.global.storeConfig;

export default orderHistorySlice.reducer;
