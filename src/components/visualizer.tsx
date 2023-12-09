// import React from "react";
import "./visualizer.css";

//time out between switching visualization
const timer = (wait: number) => new Promise((res) => setTimeout(res, wait));

//bubble sort
async function bubbleSort(arr: number[], speed: number) {
  let wait =
    speed == 1
      ? 1000
      : speed == 2
      ? 800
      : speed == 3
      ? 600
      : speed == 4
      ? 400
      : 200;

  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(arr);
        await timer(wait);
      }
    }
  }
  return arr;
}

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
