import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.addProduct.productList);
  return (
    <>
      <div className="flex justify-center items-center">
        <img width={150} src="src/assets/home.svg" />
      </div>
      {products.map((product, index) => (
        <div key={index} className="border">
          <h1>Product Name: {product.name}</h1>
          <h1>Brand: {product.brand}</h1>
          <h1>Description: {product.description}</h1>
          {product.available == 1 ? "Yes" : "No"}
        </div>
      ))}
      <Outlet />
    </>
  );
};

export default Products;
