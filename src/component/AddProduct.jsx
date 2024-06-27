import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/addProductSlice";

const AddProduct = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(name));
    setName("");
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(name));
    setName("");
  };
  return (
    <>
      <div>
        <input
          value={name}
          className="border ring border-gray-300 p-2.5 w-96"
          onChange={(e) => setName(e.target.value)}
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
