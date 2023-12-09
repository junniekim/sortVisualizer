// import React from "react";
import { useState } from "react";
import "./deciders.css";
import DecidersMethod from "./decidersMethod";
import DecidersSize from "./decidersSize";
import DecidersSpeed from "./decidersSpeed";

const Deciders = () => {
  const [sortingMethod, setSortingMethod] = useState("bubble"); // bubble, selection, insertion, quick, merge, bogo
  const [sortingSize, setSortingSize] = useState(30); // 30 - 60
  const [sortingSpeed, setSortingSpeed] = useState(10); // 1 - 20
  return (
    <div className="flex flex-wrap">
      <DecidersMethod></DecidersMethod>
      <DecidersSize></DecidersSize>
      <DecidersSpeed></DecidersSpeed>
      <button className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        Start
        {/* and reset */}
      </button>
    </div>
  );
};

export default Deciders;
