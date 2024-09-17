import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { StoreConfig } from '../../../allTypes/gql/graphql';

// Define a type for the slice state
interface GlobalState {
  storeConfig: StoreConfig | null;
  currentLng: string;
  productListColumnCount: number;
  searchedText: string;
  isGuestUser: boolean;
  otpModalStatus: OtpProps;
  isUserLoading: boolean;
  isAgeLimit: boolean;
  isRtlMode: boolean;
  isRefreshToken: boolean;
  isRTLInfoModalVisible: boolean;
  currency: string;
  forceUpdate: boolean;
  otpCountries: string[] | null;
  otpCountriesModalStatus: boolean;
  languageModalStatus: boolean;
  regionModalStatus: boolean;
}

type OtpProps = 'inProgress' | 'close' | 'verifyDone' | 'error';

// Define the initial state using that type
const initialState: GlobalState = {
  storeConfig: null,
  currentLng: 'en',
  productListColumnCount: 2,
  searchedText: '',
  isGuestUser: false,
  otpModalStatus: 'close',
  isUserLoading: true,
  isAgeLimit: false,
  isRtlMode: false,
  isRefreshToken: false,
  isRTLInfoModalVisible: false,
  currency: 'IQD',
  forceUpdate: false,
  otpCountries: null,
  otpCountriesModalStatus: false,
  languageModalStatus: false,
  regionModalStatus: false,
};

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setStoreConfig: (state, action: PayloadAction<StoreConfig>) => {
      state.storeConfig = action.payload;
    },
    setCurrentLng: (state, action: PayloadAction<string>) => {
      state.currentLng = action.payload;
      if (action.payload === 'ku_tr' || action.payload === 'ar') {
        state.isRtlMode = true;
      }
    },
    setIsGuestUser: (state, action: PayloadAction<boolean>) => {
      state.isGuestUser = action.payload;
    },
    setOtpModalStatus: (state, action: PayloadAction<OtpProps>) => {
      state.otpModalStatus = action.payload;
    },
    setIsUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserLoading = action.payload;
    },
    setIsAgeLimit: (state, action: PayloadAction<boolean>) => {
      state.isAgeLimit = action.payload;
    },
    setIsRTLInfoModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isRTLInfoModalVisible = action.payload;
    },
    setIsRefreshToken: (state, action: PayloadAction<boolean>) => {
      state.isRefreshToken = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setForceUpdate: (state, action: PayloadAction<boolean>) => {
      state.forceUpdate = action.payload;
    },
    setOtpCountries: (state, action: PayloadAction<string[] | null>) => {
      state.otpCountries = action.payload;
    },
    setOtpCountriesModalStatus: (state, action: PayloadAction<boolean>) => {
      state.otpCountriesModalStatus = action.payload;
    },
    setLanguageModalStatus: (state, action: PayloadAction<boolean>) => {
      state.languageModalStatus = action.payload;
    },
    setRegionModalStatus: (state, action: PayloadAction<boolean>) => {
      state.regionModalStatus = action.payload;
    },
  },
});

export const {
  setStoreConfig,
  setCurrentLng,
  setIsGuestUser,
  setOtpModalStatus,
  setIsUserLoading,
  setIsAgeLimit,
  setIsRTLInfoModalVisible,
  setCurrency,
  setIsRefreshToken,
  setForceUpdate,
  setOtpCountries,
  setOtpCountriesModalStatus,
  setLanguageModalStatus,
  setRegionModalStatus,
} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStoreConfig = (state: RootState) => state.global.storeConfig;

export default globalSlice.reducer;
