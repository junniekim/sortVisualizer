import { useState } from "react";
import "./App.css";
import Deciders from "./components/deciders";
import Analyzer from "./components/analyzer";
import Visualizer from "./components/visualizer";

function App() {
  const [visualizingFactors, setVisualizingFactors] = useState({
    sortingMethod: "bubble",
    sortingSpeed: 5,
    sortingSize: 20,
    sortingArray: [],
  });
  const [analyzedResult, setAnalyzedResult] = useState({
    comparisons: 0,
    time: 0,
  });
  const [comparing, setComparing] = useState(false);
  const factorChangeHandler = (selectedFactors: any) => {
    setVisualizingFactors(selectedFactors);
  };
  const analyzedChangeHandler = (endResult: any) => {
    setAnalyzedResult(endResult);
  };
  const comparingChangeHandler = (comparing: any) => {
    setComparing(comparing);
  };
  return (
    <>
      <h2 className="text-4xl font-semibold text-white bg-gradient-to-r from-indigo-800 to-purple-900 p-4 rounded-md shadow-xl text-center">
        Sort Visualizer
      </h2>
      <div className="mt-4"></div>
      <Deciders onChanges={factorChangeHandler}></Deciders>
      <div className="mt-4"></div>
      <Visualizer
        onChanges={analyzedChangeHandler}
        factors={visualizingFactors}
        compare={comparingChangeHandler}
      ></Visualizer>
      <Analyzer result={analyzedResult} compare={comparing}></Analyzer>
    </>
  );
}

export default App;
