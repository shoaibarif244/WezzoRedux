import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserAddress } from '../../../allTypes/Address/types';
import { PaymetMethod } from '../../../allTypes/CartPage/types';
import {
  AvailablePaymentMethod,
  AvailableShippingMethod,
  PricesSummary,
  SelectedShippingMethod,
  WezzoWallet,
} from '../../../allTypes/Checkout/types';

interface CheckoutState {
  selectedAddress: UserAddress | null;
  selectedPaymentMethod: PaymetMethod | null;
  appliedWalletValue: number;
  walletBalance: WezzoWallet | null;
  step: 1 | 2 | 3;
  selectedShippingMethod: SelectedShippingMethod | null;
  pricesSummary: PricesSummary | null;
  paymentMethods: AvailablePaymentMethod[];
  isPickAddressOpen: boolean;
  refreshCheckoutPage: boolean;
  orderId: string;
}

const initialState: CheckoutState = {
  selectedAddress: null,
  selectedPaymentMethod: null,
  appliedWalletValue: 0,
  walletBalance: null,
  step: 1,
  selectedShippingMethod: null,
  pricesSummary: null,
  paymentMethods: [],
  isPickAddressOpen: false,
  refreshCheckoutPage: false,
  orderId: '',
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setSelectedAddress: (state, action: PayloadAction<UserAddress>) => {
      state.selectedAddress = action.payload;
    },
    setSelectedPaymentMethod: (state, action: PayloadAction<PaymetMethod>) => {
      state.selectedPaymentMethod = action.payload;
      state.step = 3;
    },
    setAppliedWalletValue: (state, action: PayloadAction<number>) => {
      state.appliedWalletValue = action.payload;
    },
    setWalletBalance: (state, action: PayloadAction<WezzoWallet>) => {
      state.walletBalance = action.payload;
    },
    setStep: (state, action: PayloadAction<1 | 2 | 3>) => {
      state.step = action.payload;
    },
    setPricesSummary: (state, action: PayloadAction<PricesSummary>) => {
      state.pricesSummary = action.payload;
    },
    setIsPickAddressOpen: (state, action: PayloadAction<boolean>) => {
      state.isPickAddressOpen = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
    refreshCheckoutPage: (state) => {
      state.refreshCheckoutPage = !state.refreshCheckoutPage;
    },
    setPaymentMethods: (
      state,
      action: PayloadAction<AvailablePaymentMethod[]>
    ) => {
      state.paymentMethods = action.payload;
    },
    setSelectedShippingMethod: (
      state,
      action: PayloadAction<SelectedShippingMethod>
    ) => {
      state.selectedShippingMethod = action.payload;
    },
  },
});

export const {
  setSelectedAddress,
  setSelectedPaymentMethod,
  setAppliedWalletValue,
  setWalletBalance,
  setStep,
  setSelectedShippingMethod,
  setPricesSummary,
  setPaymentMethods,
  setIsPickAddressOpen,
  refreshCheckoutPage,
  setOrderId,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
