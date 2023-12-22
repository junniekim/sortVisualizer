// import React from "react";
import "./analyzer.css";

const Analyzer = (props: any) => {
  return (
    <div className="flex flex-wrap">
      {props.compare == false ? (
        <>
          <h2 className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            Time Elapsed: {props.result.duration} seconds
          </h2>
          <h2 className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            Comparisons made: {props.result.count} times
          </h2>
        </>
      ) : (
        <h2 className="w-full p-4">Analyzing...</h2>
      )}
    </div>
  );
};

export default Analyzer;
