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
        <div key={index}>
          <h1>{product}</h1>
        </div>
      ))}
      <Outlet />
    </>
  );
};

export default Products;
