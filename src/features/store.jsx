import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import addProductSlice from "./addProductSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    addProduct: addProductSlice,
  },
});
export default store;
