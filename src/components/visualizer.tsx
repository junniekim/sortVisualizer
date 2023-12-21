import { useState, useEffect, useRef } from "react";
import "./visualizer.css";

//triggered upon clicking on start button
const Visualizer = (props: any) => {
  //initially, canceling sort is false, and the given array is [0]
  const cancelSorting = useRef(false);
  let count = 0;
  const [array, setArray] = useState(props.factors.sortingArray);
  //initially set to 1000 as initial speed is 1
  let speed = props?.factors?.sortingSpeed;
  let wait =
    speed == 1
      ? 600
      : speed == 2
      ? 400
      : speed == 3
      ? 300
      : speed == 4
      ? 200
      : 100;

  //bubble algorithm
  const bubbleSort = async (paramArray: any) => {
    props.compare(true);
    let startTime = Date.now();
    let tempArray: number[] = [...paramArray];
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (cancelSorting.current) {
          return;
        }
        if (tempArray[j] > tempArray[j + 1]) {
          count = count + 1;
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
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };
  //bogo algorithm
  const isSorted = (array: any[]) => {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  };

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const bogoSort = async (paramArray: any[]) => {
    let startTime = Date.now();
    props.compare(true);
    let tempArray = [...paramArray];
    while (!isSorted(tempArray)) {
      if (cancelSorting.current) {
        return;
      }
      shuffleArray(tempArray);
      count = count + tempArray.length;
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setArray([...tempArray]);
          resolve();
        }, wait)
      );
    }
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };

  //selection sort
  const selectionSort = async (paramArray: any) => {
    let startTime = Date.now();
    props.compare(true);
    let tempArray: number[] = [...paramArray];
    for (let i = 0; i < tempArray.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < tempArray.length; j++) {
        if (cancelSorting.current) {
          return;
        }
        if (tempArray[j] < tempArray[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        count = count + 1;
        [tempArray[i], tempArray[minIndex]] = [
          tempArray[minIndex],
          tempArray[i],
        ];
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setArray([...tempArray]);
            resolve();
          }, wait)
        );
      }
    }
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };

  //quick
  const quickSort = async (initialArray: any[], start: number, end: number) => {
    if (start >= end) {
      return;
    }

    let index = await partition(initialArray, start, end);
    await Promise.all([
      quickSort(initialArray, start, index! - 1),
      quickSort(initialArray, index! + 1, end),
    ]);
  };

  const partition = async (array: any[], start: number, end: number) => {
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (cancelSorting.current) {
        return;
      }
      if (array[i] < pivotValue) {
        count = count + 1;
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setArray([...array]);
            resolve();
          }, wait)
        );
      }
    }

    // Swapping the pivot value to its correct position
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setArray([...array]);
        resolve();
      }, wait)
    );

    return pivotIndex;
  };
  const startQuickSort = async (paramArray: any[]) => {
    let startTime = Date.now();
    props.compare(true);
    await quickSort([...paramArray], 0, paramArray.length - 1);
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };
  //insertion sort
  const insertionSort = async (paramArray: any) => {
    let startTime = Date.now();
    props.compare(true);
    let tempArray: number[] = [...paramArray];
    for (let i = 1; i < tempArray.length; i++) {
      let key = tempArray[i];
      let j = i - 1;

      // Move elements of tempArray[0..i-1], that are greater than key, to one position ahead of their current position
      while (j >= 0 && tempArray[j] > key) {
        if (cancelSorting.current) {
          return;
        }

        tempArray[j + 1] = tempArray[j];
        j = j - 1;
        tempArray[j + 1] = key;
        count = count + 1;
        // Update the array state and wait for 1 second
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setArray([...tempArray]);
            resolve();
          }, wait)
        );
      }

      // Update the array state for the key insertion
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setArray([...tempArray]);
          resolve();
        }, wait)
      );
    }
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };

  //merge
  const mergeSort = async (paramArray: any[], start: number, end: number) => {
    if (start < end) {
      // Find the middle point
      let middle = Math.floor((start + end) / 2);

      // Sort first and second halves
      await mergeSort(paramArray, start, middle);
      await mergeSort(paramArray, middle + 1, end);

      // Merge the sorted halves
      await merge(paramArray, start, middle, end);
    }
  };

  const merge = async (
    array: any[],
    start: number,
    middle: number,
    end: number
  ) => {
    let n1 = middle - start + 1;
    let n2 = end - middle;

    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
      L[i] = array[start + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = array[middle + 1 + j];
    }

    // Merge the temp arrays back into array[start..end]
    let i = 0,
      j = 0;
    let k = start;
    while (i < n1 && j < n2) {
      if (cancelSorting.current) {
        return;
      }
      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
        count = count + 1;
      } else {
        array[k] = R[j];
        count = count + 1;
        j++;
      }
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setArray([...array]);
          resolve();
        }, wait)
      );
      k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
      array[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
      array[k] = R[j];
      j++;
      k++;
    }
  };
  const startMergeSort = async (paramArray: any[]) => {
    let startTime = Date.now();
    props.compare(true);
    await mergeSort([...paramArray], 0, paramArray.length - 1);
    let endTime = Date.now(); // End time
    let duration = (endTime - startTime) / 1000;
    props.onChanges({ count, duration });
    props.compare(false);
  };

  //when sorting array changes from the parent, cancel the ongoing sorting, and set the array to a new one.
  useEffect(() => {
    cancelSorting.current = true;
    setTimeout(() => {
      cancelSorting.current = false;
      if (props.factors.sortingMethod == "bubble") {
        bubbleSort(props.factors.sortingArray);
      } else if (props.factors.sortingMethod == "selection") {
        selectionSort(props.factors.sortingArray);
      } else if (props.factors.sortingMethod == "insertion") {
        insertionSort(props.factors.sortingArray);
      } else if (props.factors.sortingMethod == "quick") {
        startQuickSort(props.factors.sortingArray);
      } else if (props.factors.sortingMethod == "merge") {
        startMergeSort(props.factors.sortingArray);
      } else if (props.factors.sortingMethod == "bogo") {
        bogoSort(props.factors.sortingArray);
      }
    }, 1000);
  }, [props.factors]);

  //when array starts sorting, refresh everytime something swaps.
  useEffect(() => {
    cancelSorting.current = false;
  }, [array]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center", // Centers the bars horizontally
        height: "300px",
        backgroundColor: "#333", // Dark background for the container
        gap: "3px",
        width: "100%", // Ensure the container takes full width
        borderRadius: "15px",
      }}
    >
      {array.map((value: any, index: any) => (
        <div
          key={index}
          style={{
            width: "20px",
            height: `${value * 5 + 20}px`,
            backgroundColor: "#4f8edc", // Stylish blue for the bars
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
