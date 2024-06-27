import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/addProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addProduct());
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct());
  };
  return (
    <>
      <div>
        <input
          className="border ring border-gray-300 p-2.5 w-96"
          placeholder="Please enter a product"
        />
        <button
          className="mx-10 px-5 py-2 bg-green-600 rounded-md"
          onClick={handleAddProduct}
        >
          Add
        </button>
        <button
          className="px-5 py-2 bg-red-600 rounded-md"
          onClick={handleDeleteProduct}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default AddProduct;
