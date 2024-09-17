import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cart, CartItem } from '../../../allTypes/CartPage/types';

interface CartState {
  cartData: Cart | null;
  tempCartList: CartItem[];
  cartId: string | null;
  cartQuantity: number;
}

// Define the initial state using that type
const initialState: CartState = {
  cartData: null,
  cartId: null,
  cartQuantity: 0,
  tempCartList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      if (action.payload && action.payload.data && action.payload.id) {
        state.cartData = action.payload.data;
        state.cartId = action.payload.id;
      }
    },
    setCartId: (state, action: PayloadAction<string | null>) => {
      state.cartId = action.payload;
    },
    setCartData: (state, action: PayloadAction<Cart | null>) => {
      state.cartData = action.payload;
    },
    setCartQuantity: (state, action: PayloadAction<number>) => {
      state.cartQuantity = action.payload;
    },
    setTempCartList: (state, action: PayloadAction<CartItem[]>) => {
      state.tempCartList = action.payload;
    },
    clearCartData: (state) => {
      state.cartData = null;
      state.cartQuantity = 0;
      // state.cartId = null;
    },
  },
});

// Selectors
export const selectCartData = (state) => state.cart.cartData;
export const selectCartId = (state) => state.cart.cartId;

// Action creators are generated for each case reducer function
export const {
  setCart,
  setCartData,
  setCartId,
  clearCartData,
  setCartQuantity,
  setTempCartList,
} = cartSlice.actions;

export default cartSlice.reducer;
