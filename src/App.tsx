import { useState } from "react";
import "./App.css";
import Deciders from "./components/deciders";
import Analyzer from "./components/analyzer";
import Visualizer from "./components/visualizer";

function App() {
  //initial value to be passed into visualizer before decider passes something
  const [visualizingFactors, setVisualizingFactors] = useState({
    sortingMethod: "bubble",
    sortingSpeed: 1,
    sortingSize: 20,
    sortingArray: [0],
  });

  const factorChangeHandler = (selectedFactors: any) => {
    setVisualizingFactors(selectedFactors);
  };

  return (
    <>
      <h2>Sort Visualizer</h2>
      <Deciders onChanges={factorChangeHandler}></Deciders>
      <Visualizer factors={visualizingFactors}></Visualizer>
      <Analyzer></Analyzer>
    </>
  );
}

export default App;
// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//   Click Me
// </button>;
