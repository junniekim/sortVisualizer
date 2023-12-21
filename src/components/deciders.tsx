// import React from "react";
import { useState, useEffect } from "react";
import "./deciders.css";
import DecidersMethod from "./decidersMethod";
import DecidersSize from "./decidersSize";
import DecidersSpeed from "./decidersSpeed";

const Deciders = (props: any) => {
  const [sortingMethod, setSortingMethod] = useState("bubble"); // bubble, selection, insertion, quick, merge, bogo
  const [sortingSize, setSortingSize] = useState(20); // 20 - 50
  const [sortingSpeed, setSortingSpeed] = useState(5); // 1 - 5
  const [sortingArray, setSortingArray] = useState([0]); //initially [0]
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  //when sorting array is updated, which means start button is clicked
  useEffect(() => {
    // Ensure sortingArray is not in its initial state, which is just [0]
    if (sortingArray && sortingArray.length > 1) {
      props.onChanges({
        sortingMethod,
        sortingSize,
        sortingSpeed,
        sortingArray,
      });
    }
  }, [sortingArray]);

  //start button
  const buttonClicked = () => {
    setIsButtonDisabled(true); // Disable the button
    setTimeout(() => setIsButtonDisabled(false), 5000); // Re-enable after 1 second
    let tempArray: Array<number> = [];
    for (let i = 0; i < sortingSize; i++) {
      tempArray.push(i + 1);
    }
    tempArray = tempArray.sort(() => Math.random() - 0.5);
    setSortingArray(tempArray);
  };
  const methodChangeHandler = (selectedMethod: any) => {
    setSortingMethod(selectedMethod);
  };
  const sizeChangeHandler = (selectedSize: any) => {
    setSortingSize(selectedSize);
  };
  const speedChangeHandler = (selectedSpeed: any) => {
    setSortingSpeed(selectedSpeed);
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
        disabled={isButtonDisabled}
        className="text-sm md:text-base lg:text-lg w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
      >
        Start
      </button>
    </div>
  );
};

export default Deciders;
