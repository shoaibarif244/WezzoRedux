import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DatetimeFilter {
  from: string;
  to: string;
}

interface SearchQueryFilter {
  match: string;
}

interface FiltersState {
  datetime: DatetimeFilter;
  search_query: SearchQueryFilter;
}

const initialState: FiltersState = {
  datetime: {
    from: '',
    to: '',
  },
  search_query: {
    match: '',
  },
};

const subCustemerWalletFilterSlice = createSlice({
  name: 'subCustemerWalletFilters',
  initialState,
  reducers: {
    setDatetimeFilter(state, action: PayloadAction<DatetimeFilter>) {
      state.datetime = action.payload;
    },
    setSearchQueryFilter(state, action: PayloadAction<SearchQueryFilter>) {
      state.search_query = action.payload;
    },
    clearFilters(state) {
      state.datetime = initialState.datetime;
      state.search_query = initialState.search_query;
    },
  },
});

export const { setDatetimeFilter, setSearchQueryFilter, clearFilters } =
  subCustemerWalletFilterSlice.actions;
export default subCustemerWalletFilterSlice.reducer;
