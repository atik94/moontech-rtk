import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/CartSlice";
import filterSlice from "../features/filter/FilterSlice";
// import logger from "redux-logger";
import { productApi } from "../features/api/ApiSlice";

const store = configureStore({
  //devTools: false,
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});
export default store;
