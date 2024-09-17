import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global/globalSlice';
import menuReducer from './menu/menuSlice';
import plpSlice from './plp/plpSlice';
import pdpSlice from './pdp/pdpSlice';
import userSlice from './user/userSlice';
import cartSlice from './cart/cartSlice';
import orderHistorySlice from './order/orderHistorySlice';
import accountInfoSlice from './accountInfo/accountInfoSlice';
import checkoutSlice from './checkout/checkoutSlice';
import buyForMeSlice from './buyForMe/buyForMeSlice';
import shippingManagementSlice from './shippingManagement/shippingManagementSlice';
import categorySlice from './category/categorySlice';
import homeSlice from './home/homeSlice';
import wishlistSlice from './wishlist/wishlistSlice';
import searchSlice from './searchSlice/searchSlice';
import wezzoWalletSlice from './wezzoWallet/wezzoWalletSlice';
import vendorSlice from './vendor/vendorSlice';

import subCustomerFilterSlice from './subCustomerFilter/subCustomerFilterSlice';
import subCustemerWalletFilterSlice from './subCustemerWalletFilter/subCustemerWalletFilterSlice';
import partnerDashboardFilterSlice from './partnerDashboardFilter/partnerDashboardFiltersSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    menu: menuReducer,
    plp: plpSlice,
    user: userSlice,
    cart: cartSlice,
    orderHistory: orderHistorySlice,
    accountInfo: accountInfoSlice,
    checkout: checkoutSlice,
    pdp: pdpSlice,
    buyForMe: buyForMeSlice,
    shippingManagement: shippingManagementSlice,
    category: categorySlice,
    home: homeSlice,
    wishlist: wishlistSlice,
    search: searchSlice,
    wezzoWallet: wezzoWalletSlice,
    vendor: vendorSlice,
    subCustomerFilter: subCustomerFilterSlice,
    subCustomerWalletFilter: subCustemerWalletFilterSlice,
    partnerDashboardFilter: partnerDashboardFilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
