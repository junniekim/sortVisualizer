// import React from "react";

import "./decidersSpeed.css";

const DecidersSpeed = (props: any) => {
  const speedChangeHandler = (event: any) => {
    props.onChangeSpeed(event.target.value);
  };
  return (
    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Set Speed (1-5)
      </label>
      <input
        defaultValue={props.selected}
        onChange={speedChangeHandler}
        type="range"
        min="1"
        max="5"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default DecidersSpeed;
