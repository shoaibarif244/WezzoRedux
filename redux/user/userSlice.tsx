import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import AvatarPlaceholder from '../../assets/images/avatar-placeholder.png';
import { Source } from 'react-native-fast-image';
import { countries } from '../../constants/Countries';
import { UserAddress } from '../../../allTypes/Address/types';
import { UserData } from '../../../allTypes/AccountInfoPage/types';

interface UserState {
  customerToken: string | null;
  isSigningIn: boolean;
  signingError: string | null;
  avatar: Source | number;
  userData: UserData | null;
  countryPhoneCode: string;
  addresses: UserAddress[];
  isByMail?: boolean;
  refreshAccountAddress?: boolean;
}

const initialState: UserState = {
  customerToken: null,
  isSigningIn: false,
  signingError: null,
  avatar: AvatarPlaceholder,
  userData: null,
  countryPhoneCode: '',
  addresses: [],
  isByMail: false,
  refreshAccountAddress: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCustomerToken: (state, action: PayloadAction<string | null>) => {
      state.customerToken = action.payload;
    },
    setIsSigningIn: (state, action: PayloadAction<boolean>) => {
      state.isSigningIn = action.payload;
    },
    setIsByMail: (state, action: PayloadAction<boolean>) => {
      state.isByMail = action.payload;
    },
    setSigningError: (state, action: PayloadAction<string | null>) => {
      state.signingError = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      let tempUserData = action.payload;
      if (action.payload.email.includes('@wezzomart.io')) {
        // const atIndex = action.payload.email.indexOf('@');
        // tempUserData.telephone = action.payload.email.substring(0, atIndex);
        tempUserData = {
          ...tempUserData,
          email: '',
        };
      }

      if (
        action.payload?.profile_photo &&
        action.payload?.profile_photo !== '-'
      ) {
        state.avatar = { uri: action.payload?.profile_photo };
      }
      const telephone = action.payload.telephone;
      if (telephone) {
        tempUserData = {
          ...tempUserData,
          telephone: telephone.slice(-10),
        };
        const initialCountry =
          countries.find(
            (val) => val.code === telephone.slice(0, telephone?.length - 10)
          ) ?? countries[0];
        // setSelectedCountry(initialCountry);
        state.countryPhoneCode = initialCountry.code;
      } else {
        state.countryPhoneCode = countries[0].code;
      }
      state.userData = tempUserData;
    },
    setAvatar: (state, action: PayloadAction<Source | number>) => {
      state.avatar = action.payload;
    },
    setAddresses: (state, action: PayloadAction<UserAddress[]>) => {
      state.addresses = action.payload;
    },
    pushToAddresses: (state, action: PayloadAction<UserAddress>) => {
      state.addresses.push(action.payload);
    },
    clearUser: (state) => {
      state.isSigningIn = false;
      state.userData = null;
    },
    refreshAccountAddressScreen: (state) => {
      state.refreshAccountAddress = !state.refreshAccountAddress;
    },
  },
});

export const {
  setCustomerToken,
  setIsSigningIn,
  setSigningError,
  setAvatar,
  setUserData,
  clearUser,
  setAddresses,
  setIsByMail,
  pushToAddresses,
  refreshAccountAddressScreen,
} = userSlice.actions;

export const selectCustomerToken = (state: RootState) =>
  state.user.customerToken;
export const selectIsSigningIn = (state: RootState) => state.user.isSigningIn;
export const selectSigningError = (state: RootState) => state.user.signingError;

export default userSlice.reducer;
