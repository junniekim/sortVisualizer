import { useState } from "react";
import "./App.css";
import Deciders from "./components/deciders";
import Analyzer from "./components/analyzer";
import Visualizer from "./components/visualizer";

function App() {
  return (
    <>
      <h2>Sort Visualizer</h2>
      <Deciders></Deciders>
      <Visualizer></Visualizer>
      <Analyzer></Analyzer>
    </>
  );
}

export default App;
// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//   Click Me
// </button>;
