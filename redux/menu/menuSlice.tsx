import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CategoryResult } from '../../../allTypes/gql/graphql';

// Define a type for the slice state
interface MenuState {
  menuCategories: CategoryResult | null;
  menuCategoriesArrays: CategoryResult | null;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: MenuState = {
  menuCategories: null,
  menuCategoriesArrays: null,
  isLoading: true,
};

export const menuSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenuCategories: {
      reducer: (state, action) => {
        state.menuCategories = action.payload.normalized;
        state.menuCategoriesArrays = action.payload.array;
      },
      prepare: (data) => {
        const mainCategories = data?.items && data?.items[0]?.children;
        const myObject = arrayToObjectWithID(mainCategories);
        convertSubArrays(myObject);

        return { payload: { normalized: myObject, array: mainCategories } };
      },
    },
    setIsMenuCategoriesLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMenuCategories, setIsMenuCategoriesLoading } =
  menuSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenuCategories = (state: RootState) =>
  state.menu.menuCategories;
export const selectMenuCategoriesArray = (state: RootState) =>
  state.menu.menuCategoriesArrays;
export const selectIsMenuCategoriesLoading = (state: RootState) =>
  state.menu.isLoading;

export default menuSlice.reducer;

function arrayToObjectWithID(arr) {
  return arr.reduce((obj, item) => {
    const { uid, children, ...rest } = item; // Extract the ID, subArray, and other properties from the object

    if (children && Array.isArray(children)) {
      rest.children = arrayToObjectWithID(children); // Recursively convert the subArray to an object of objects
    }

    obj[uid] = { ...rest, uid: uid }; // Assign the remaining properties to the object with the ID as the key
    return obj;
  }, {});
}

function convertSubArrays(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      obj[key] = arrayToObjectWithID(obj[key]); // Convert the sub-array to an object of objects
    }
    if (typeof obj[key] === 'object') {
      convertSubArrays(obj[key]); // Recursively check for nested sub-arrays
    }
  }
}
