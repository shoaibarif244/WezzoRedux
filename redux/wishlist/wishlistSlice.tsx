import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WishlistItem } from '../../../allTypes/Wishlist/types';

interface WishlistSku {
  id: number;
  product: {
    uid: string;
    sku: string;
  };
}

interface WishlistState {
  wishlistOnlySkuList: WishlistSku[];
  wishlistId: string;
  wishlist: WishlistItem[];
}

const initialState: WishlistState = {
  wishlistOnlySkuList: [],
  wishlistId: '',
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlistOnlySkuList: (state, action: PayloadAction<WishlistSku[]>) => {
      state.wishlistOnlySkuList = action.payload;
    },
    setWishlistId: (state, action: PayloadAction<string>) => {
      state.wishlistId = action.payload;
    },
    setWishlist: (state, action: PayloadAction<WishlistItem[]>) => {
      state.wishlist = action.payload;
    },
    updateWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.toString()
      );
    },
  },
});

export const {
  setWishlistOnlySkuList,
  setWishlistId,
  setWishlist,
  updateWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
