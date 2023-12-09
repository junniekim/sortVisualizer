// import React from "react";

import "./decidersSize.css";

const DecidersSize = (props: any) => {
  const sizeChangeHandler = (event: any) => {
    props.onChangeSize(event.target.value);
  };

  return (
    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Set Size (20-50)
      </label>
      <input
        defaultValue={props.selected}
        onChange={sizeChangeHandler}
        type="range"
        min="20"
        max="50"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default DecidersSize;
