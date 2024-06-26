import React from "react";
import Counter from "../component/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state) => state?.counter?.count);
  return (
    <>
      <div className="flex justify-center items-center">
        <img src="src/assets/home.svg" />
      </div>
      {/* <div className="justify-center items-center mt-10">
        <p className="font-bold text-5xl">Welcome To</p>
        <p className="text-3xl">One Year Academy</p>
        <p className="text-xl">I am from Home</p>
      </div> */}
      <h1 className="font-bold text-black text-[40px] font-mono">
        {count} From Redux
      </h1>
      <Counter />
    </>
  );
};

export default Home;
