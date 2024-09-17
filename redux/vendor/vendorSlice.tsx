import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  FilterItem,
  FilterType,
  ProductItem,
  SelectedFilterItem,
} from '../../../allTypes/Plp/types';
import { t } from 'i18next';
interface PlpState {
  isLoading: boolean;
  isFetchingMore: boolean;
  isSortModalVisible: boolean;
  currentPage: number;
  selectedFilterList: FilterItem[];
  currentFilters: any;
  filters: FilterType[];
  refreshData: boolean;
  plpListData: ProductItem[];
  totalPage: number;
  totalCount: number;
  selectedFilterListV2: SelectedFilterItem[];
  selectedSortMethod: string;
}
const initialState: PlpState = {
  isLoading: true,
  isFetchingMore: false,
  isSortModalVisible: false,
  currentPage: 1,
  selectedFilterList: [],
  currentFilters: {},
  filters: [],
  refreshData: false,
  plpListData: [],
  totalPage: 1,
  totalCount: 0,
  selectedFilterListV2: [],
  selectedSortMethod: t('productSort:sortButton'),
};

export const vendorPlpSlice = createSlice({
  name: 'vendorPlp',
  initialState,

  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsFetchingMore: (state, action: PayloadAction<boolean>) => {
      state.isFetchingMore = action.payload;
    },
    setIsSortModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSortModalVisible = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCurrentFilters: (state, action: PayloadAction<any>) => {
      state.currentFilters = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterType[]>) => {
      state.filters = action.payload;
    },
    setSelectedSortMethod: (state, action: PayloadAction<string>) => {
      state.selectedSortMethod = action.payload;
    },
    setSelectedFilterList: (state, action: PayloadAction<FilterItem[]>) => {
      state.selectedFilterList = [
        ...action.payload,
        { attributeCode: 'clear', label: 'clear', value: 'clear' },
      ];
    },
    setSelectedFilterListV2: (
      state,
      action: PayloadAction<SelectedFilterItem[]>
    ) => {
      if (action.payload[0].attribute_code === 'price') {
        if (
          state.selectedFilterListV2.some(
            (val) =>
              val.selectedFilterValue === action.payload[0].selectedFilterValue
          )
        ) {
          state.selectedFilterListV2 = state.selectedFilterListV2.filter(
            (val) => val.attribute_code !== 'price'
          );
        } else {
          state.selectedFilterListV2 = state.selectedFilterListV2.filter(
            (val) => val.attribute_code !== 'price'
          );
          state.selectedFilterListV2 = [
            ...state.selectedFilterListV2,
            ...action.payload,
          ];
        }
      } else if (action.payload[0].isSelected === false) {
        state.selectedFilterListV2 = state.selectedFilterListV2.filter(
          (val) =>
            val.selectedFilterValue !== action.payload[0].selectedFilterValue
        );
      } else {
        state.selectedFilterListV2 = [
          ...state.selectedFilterListV2,
          ...action.payload,
        ];
      }
    },
    clearSelectedFilterListV2: (state) => {
      state.selectedFilterListV2 = [];
      // state.refreshData = !state.refreshData;
    },
    removeFilterSelectedFilterList: (
      state,
      action: PayloadAction<SelectedFilterItem>
    ) => {
      state.selectedFilterListV2 = state.selectedFilterListV2.filter(
        (val) => val.selectedFilterValue !== action.payload.selectedFilterValue
      );
    },
    setRefreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
    pushToPlpListData: (state, action: PayloadAction<ProductItem[]>) => {
      state.plpListData = action.payload;
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    clearPlpListData: (state) => {
      state.plpListData = [];
      state.totalCount = 0;
      state.totalPage = 1;
      state.currentPage = 1;
      state.isLoading = true;
      state.isFetchingMore = false;
      state.selectedSortMethod = t('productSort:sortButton');
    },
  },
});
export const {
  setCurrentPage,
  setSelectedFilterList,
  removeFilterSelectedFilterList,
  setCurrentFilters,
  setFilters,
  setSelectedFilterListV2,
  setRefreshData,
  clearSelectedFilterListV2,
  pushToPlpListData,
  clearPlpListData,
  setTotalPage,
  setTotalCount,
  setIsLoading,
  setIsFetchingMore,
  setIsSortModalVisible,
  setSelectedSortMethod,
} = vendorPlpSlice.actions;

export default vendorPlpSlice.reducer;
