// import React from "react";
import "./visualizer.css";

//time out between switching visualization
const timer = (wait: number) => new Promise((res) => setTimeout(res, wait));

//bubble sort
function bubbleSort(arr: number[]) {
  let arrOfArr: Array<Array<number>> = [];

  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const newArr = arr.slice();
        arrOfArr.push(newArr);
      }
    }
  }
  return arrOfArr;
}
//snapshot of each stage in an array, and return
// show one snapshot at a time

const Visualizer = (props: any) => {
  //generate shufffled array for a given size
  let speed = props?.factors?.sortingSpeed;
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
  let snapshots: Array<Array<number>> = [];
  let givenArray: Array<number> = [];
  if (props.factors) {
    for (let i = 0; i < props.factors.sortingSize; i++) {
      givenArray.push(i + 1);
    }
    givenArray = givenArray.sort(() => Math.random() - 0.5);
    console.log("Pre-Sorting: " + givenArray);

    //bubble
    if (props.factors.sortingMethod == "bubble") {
      snapshots = bubbleSort(givenArray);
      console.log(snapshots);
    }
  }
  //at this point we have a snapshot of each stage, speed
  for (let i = 0; i < props.factors?.sortingSize; i++) {
    return snapshots[i].map((stage) => <div key={Math.random()}>{stage}</div>);
  }
};

export default Visualizer;
