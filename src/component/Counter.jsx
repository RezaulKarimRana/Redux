import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import { useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1 className="font-bold text-black text-[40px] font-mono">
        {count} From Local
      </h1>
      <button
        className="px-5 py-2 bg-green-600 rounded-md"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <br />
      <button
        className="px-5 py-2 mt-2 bg-red-600 rounded-md"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
