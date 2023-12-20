import { useState, useEffect, useRef } from "react";
import "./visualizer.css";

//triggered upon clicking on start button
const Visualizer = (props: any) => {
  //initially, canceling sort is false, and the given array is [0]
  const cancelSorting = useRef(false);
  const [array, setArray] = useState(props.factors.sortingArray);
  //initially set to 1000 as initial speed is 1
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

  //sorting algorithm
  const bubbleSort = async () => {
    console.log("START");
    console.log(array);
    let tempArray: number[] = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (cancelSorting.current) {
          console.log("exit");
          return;
        }
        if (tempArray[j] > tempArray[j + 1]) {
          console.log("swap");
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          await new Promise<void>((resolve) =>
            setTimeout(() => {
              setArray([...tempArray]);
              resolve();
            }, wait)
          );
        }
      }
    }
    console.log("DONE");
  };
  //when sorting array changes from the parent, cancel the ongoing sorting, and set the array to a new one.
  useEffect(() => {
    // cancelSorting.current = true;
    setArray(props.factors.sortingArray);
  }, [props.factors]);
  //when array starts sorting, refresh everytime something swaps.
  useEffect(() => {
    cancelSorting.current = false;
  }, [array]);
  bubbleSort();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        height: "300px",
        gap: "3px",
      }}
    >
      {array.map((value: any, index: any) => (
        <div
          key={index}
          style={{
            width: "20px",
            height: `${value * 5}px`,
            backgroundColor: "blue",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            color: "white",
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Visualizer;
