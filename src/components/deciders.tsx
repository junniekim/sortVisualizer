// import React from "react";
import { useState } from "react";
import "./deciders.css";
import DecidersMethod from "./decidersMethod";
import DecidersSize from "./decidersSize";
import DecidersSpeed from "./decidersSpeed";

const Deciders = (props: any) => {
  const [sortingMethod, setSortingMethod] = useState("bubble"); // bubble, selection, insertion, quick, merge, bogo
  const [sortingSize, setSortingSize] = useState(30); // 30 - 60
  const [sortingSpeed, setSortingSpeed] = useState(1); // 1 - 5
  const buttonClicked = () => {
    props.onChanges({ sortingMethod, sortingSize, sortingSpeed });
  };
  const methodChangeHandler = (selectedMethod: any) => {
    setSortingMethod(selectedMethod);
    console.log(selectedMethod);
  };
  const sizeChangeHandler = (selectedSize: any) => {
    setSortingSize(selectedSize);
    console.log(selectedSize);
  };
  const speedChangeHandler = (selectedSpeed: any) => {
    setSortingSpeed(selectedSpeed);
    console.log(selectedSpeed);
  };
  return (
    <div className="flex flex-wrap">
      <DecidersMethod
        selected={sortingMethod}
        onChangeMethod={methodChangeHandler}
      ></DecidersMethod>
      <DecidersSize
        selected={sortingSize}
        onChangeSize={sizeChangeHandler}
      ></DecidersSize>
      <DecidersSpeed
        selected={sortingSpeed}
        onChangeSpeed={speedChangeHandler}
      ></DecidersSpeed>
      <button
        onClick={buttonClicked}
        className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
      >
        Start
        {/* and reset */}
      </button>
    </div>
  );
};

export default Deciders;
