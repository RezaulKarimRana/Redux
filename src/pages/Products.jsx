import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>This is from product page</div>
      <Outlet />
    </>
  );
};

export default Products;
