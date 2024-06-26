import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../features/counterSlice";
const Counter = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(setCount((prev) => prev + 1)));
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
    </>
  );
};

export default Counter;
