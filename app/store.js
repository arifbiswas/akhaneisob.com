import { configureStore } from "@reduxjs/toolkit";
import { drawerToggleSlice } from "./reducers/toggleReducer";
import { productsReducer } from "./reducers/productsReducer";
import { categoryReducer } from "./reducers/categoriesReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer.reducer,
    categories: categoryReducer.reducer,
    toggle: drawerToggleSlice.reducer,
  },
});
