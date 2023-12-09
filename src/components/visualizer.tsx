// import React from "react";
import "./visualizer.css";

const bubbleSort = (arr: number[], speed: number): any => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const Visualizer = (props: any) => {
  //generate shufffled array for a given size
  let givenArray: Array<number> = [];
  if (props.factors) {
    for (let i = 0; i < props.factors.sortingSize; i++) {
      givenArray.push(i + 1);
    }
    givenArray = givenArray.sort(() => Math.random() - 0.5);
    console.log("Pre-Sorting: " + givenArray);

    //bubble
    if (props.factors.sortingMethod == "bubble") {
      console.log(bubbleSort(givenArray, props.factors.sortingSpeed));
    }
    //selection
    else if (props.factors.sortingMethod == "selection") {
      console.log("select");
    }
  }

  return <div>Visualizer</div>;
};

export default Visualizer;
