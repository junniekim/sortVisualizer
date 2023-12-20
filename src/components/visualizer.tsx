import { useState, useEffect, useRef } from "react";
import "./visualizer.css";

const Visualizer = (props: any) => {
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

  const cancelSorting = useRef(false);
  const [array, setArray] = useState(props.factors.sortingArray);
  //when sorting array changes, needs to update, when factors change, need to restart

  //when sorting array changes from the parent, cancel the ongoing sorting, and set the array to a new one.
  useEffect(() => {
    cancelSorting.current = true;
    setArray(props.factors.sortingArray);
    cancelSorting.current = false;
    bubbleSort();
  }, [props.factors]);

  //when array starts sorting, refresh everytime something swaps.
  useEffect(() => {
    cancelSorting.current = false;
  }, [array]);
  const bubbleSort = async () => {
    console.log("START");
    let tempArray: number[] = [...array];

    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (cancelSorting.current) {
          return; // Exit the sorting if cancel flag is true
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

  return (
    <div>
      {array?.map((value: any, index: any) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default Visualizer;
