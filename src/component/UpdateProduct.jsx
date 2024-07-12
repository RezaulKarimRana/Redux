import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/addProductSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const UpdateProduct = ({
  setVisible,
  editedId,
  editedName,
  editedBrand,
  editedDescription,
  editedCheckbox,
  setEditedName,
  setEditedBrand,
  setEditedDescription,
  setEditedCheckbox,
}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    const updatedValues = {
      id: editedId,
      name: editedName,
      brand: editedBrand,
      description: editedDescription,
    };
    dispatch(updateProduct(updatedValues));
    toast.success("Successfully Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
    setVisible(false);
  };
  return (
    <>
      <Helmet>
        <title>Update Product</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 flex justify-center items-center">
        <div className="w-2/3 bg-white shadow-md rounded-md p-5">
          <div>
            <div className="relative">
              <h1 className="font-mono text-3xl text-black text-center mb-4">
                Update Your Product
              </h1>
              <div
                className="absolute top-0 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-slate-300 cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <input
              value={editedName}
              className="border ring border-gray-300 p-2.5 w-96"
              placeholder="Please enter a product"
              onChange={(e) => setEditedName(e.target.value)}
            />
            <br />
            <select
              value={editedBrand}
              onChange={(e) => setEditedBrand(e.target.value)}
              className="border ring border-gray-300 p-2.5 w-96 mt-5"
            >
              <option value="">Please Select Brand</option>
              <option value="Chair">Chair</option>
              <option value="Table">Table</option>
              <option value="Show Case">Show Case</option>
            </select>
            <br />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="border ring border-gray-300 p-2.5 w-96 mt-5"
              placeholder="Please Enter Product Description"
              rows={4}
              cols={40}
            />
            <br />
            <input
              type="checkbox"
              value={editedCheckbox}
              onChange={() => setEditedCheckbox(!editedCheckbox)}
            />
            <label className="mx-20">Is Product Available</label>
            <br />
            <button
              className="mx-10 mt-5 px-5 py-2 bg-green-600 rounded-md"
              onClick={handleEdit}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
