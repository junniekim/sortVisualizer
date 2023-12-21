// import React from "react";

import "./decidersMethod.css";

const DecidersMethod = (props: any) => {
  const methodChangeHandler = (event: any) => {
    props.onChangeMethod(event.target.value);
  };
  return (
    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Set Method
      </h2>
      <select
        value={props.selected}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={methodChangeHandler}
      >
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="bogo">Bogo Sort</option>
      </select>
    </div>
  );
};

export default DecidersMethod;
