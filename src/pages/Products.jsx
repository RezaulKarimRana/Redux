import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { deleteProduct } from "../features/addProductSlice";

const Products = () => {
  const perRow = 3;
  const [next, setNext] = useState(3);
  const products = useSelector((state) => state.addProduct.productList);
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <img width={150} src="src/assets/home.svg" />
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-x-3">
          {products?.slice(0, next).map((product, index) => (
            <div
              key={product.id}
              className="shadow-sm bg-white rounded-md px-4 py-3 border border-slate-500"
            >
              <h1 className="font-mono text-xl font-bold">
                Product Name: {product.name}
              </h1>
              <h1 className="font-mono text-xl font-bold">
                Brand: {product.brand}
              </h1>
              <h1 className="font-sans text-lg font-normal">
                Description: {product.description}
              </h1>
              {product.available == 1 ? (
                <p className="font-mono text-xl font-bold">Yes</p>
              ) : (
                <p className="font-mono text-xl font-bold">No</p>
              )}
              <h1 className="font-sans text-lg font-normal">
                Created At: {product.description}
              </h1>
              <span className="text-base font-mono text-slate-500">
                {formatDistance(product.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <div className="flex items-center justify-end gap-x-3 mt-5">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-5 py-2 bg-red-400 text-white font-medium rounded-md"
                >
                  Delete
                </button>
                <button className="px-5 py-2 bg-slate-400 text-white font-medium rounded-md">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {products.length > next && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-cyan-800 rounded-md text-white mt-5"
            >
              Load More...
            </button>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
