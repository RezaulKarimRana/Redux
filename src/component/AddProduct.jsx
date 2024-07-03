import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/addProductSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState(1);
  const product = {
    id: "",
    name: "",
    brand: "",
    description: "",
    available: "",
    createdAt: "",
  };
  const dispatch = useDispatch();
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (name !== "" && description !== "" && brand !== "") {
      product.id = Date.now().toString(32);
      product.name = name;
      product.brand = brand;
      product.description = description;
      product.available = available;
      product.createdAt = new Date().toString();
      dispatch(addProduct(product));
      setName("");
      setBrand("");
      setDescription("");
      setAvailable(1);
      toast.success("Successfully Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Please fill required field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <ToastContainer />
      <div>
        <input
          value={name}
          className="border ring border-gray-300 p-2.5 w-96"
          onChange={(e) => setName(e.target.value)}
          placeholder="Please enter a product"
        />
        <br />
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border ring border-gray-300 p-2.5 w-96 mt-5"
        >
          <option value="">Please Select Brand</option>
          <option value="Chair">Chair</option>
          <option value="Table">Table</option>
          <option value="Show Case">Show Case</option>
        </select>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border ring border-gray-300 p-2.5 w-96 mt-5"
          placeholder="Please Enter Product Description"
          rows={4}
          cols={40}
        />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setAvailable(e.target.value)}
          value={available}
        />
        <label className="mx-20">Is Product Available</label>
        <br />
        <button
          className="mx-10 mt-5 px-5 py-2 bg-green-600 rounded-md"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
