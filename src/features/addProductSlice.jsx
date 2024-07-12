import { createSlice } from "@reduxjs/toolkit";
const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      if (action.payload !== "undefined")
        state.productList = [...state.productList, action.payload];
      localStorage.setItem("product", JSON.stringify(state.productList));
    },
    deleteProduct: (state, action) => {
      if (action.payload !== "undefined") {
        state.productList = state.productList.filter(
          (x) => x.id !== action.payload
        );
        localStorage.setItem("product", JSON.stringify(state.productList));
      }
    },
    updateProduct: (state, action) => {
      if (action.payload !== "undefined") {
        const { id, name, brand, description, available } = action.payload;
        const product = state.productList.find((x) => x.id == id);
        if (product) {
          product.name = name;
          product.brand = brand;
          product.description = description;
          product.available = available;
          localStorage.setItem("product", JSON.stringify(state.productList));
        }
      }
    },
  },
});
export const { addProduct, deleteProduct, updateProduct } =
  addProductSlice.actions;
export default addProductSlice.reducer;
