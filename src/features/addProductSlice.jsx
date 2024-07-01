import { createSlice } from "@reduxjs/toolkit";
const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      debugger;
      if (action.payload !== "undefined")
        state.productList = [...state.productList, action.payload];
    },
    deleteProduct: (state, action) => {
      if (action.payload !== "undefined") {
        state.productList = state.productList.filter(
          (x) => x !== action.payload
        );
      }
    },
  },
});
export const { addProduct, deleteProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
