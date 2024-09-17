import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DatetimeFilter {
  from: string;
  to: string;
}

interface SearchQueryFilter {
  match: string;
}
interface OrderStatusFilter {
  eq: string;
}
interface FiltersState {
  datetime: DatetimeFilter;
  search_query: SearchQueryFilter;
  status: OrderStatusFilter;
}

const initialState: FiltersState = {
  datetime: {
    from: '',
    to: '',
  },
  search_query: {
    match: '',
  },
  status: { eq: '' },
};

const partnerDashboardFiltersSlice = createSlice({
  name: 'partnerDashboardFilters',
  initialState,
  reducers: {
    setPdDatetimeFilter(state, action: PayloadAction<DatetimeFilter>) {
      state.datetime = action.payload;
    },
    setPdSearchQueryFilter(state, action: PayloadAction<SearchQueryFilter>) {
      state.search_query = action.payload;
    },
    setPdOrderStatusFilter(state, action: PayloadAction<OrderStatusFilter>) {
      state.status = action.payload;
    },
    clearPdFilters(state) {
      state.datetime = initialState.datetime;
      state.search_query = initialState.search_query;
      state.status = initialState.status;
    },
  },
});

export const {
  setPdDatetimeFilter,
  setPdSearchQueryFilter,
  setPdOrderStatusFilter,
  clearPdFilters,
} = partnerDashboardFiltersSlice.actions;
export default partnerDashboardFiltersSlice.reducer;
