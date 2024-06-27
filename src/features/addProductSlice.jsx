import { createSlice } from "@reduxjs/toolkit";
const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state) => {
      state.productList.push("Apple");
    },
    deleteProduct: (state) => {
      state.productList.pop("Apple");
    },
  },
});
export const { addProduct, deleteProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
