import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import SortingVisualizer from "./components/SortingVisualizer";
import { insertionSort } from "./algorithms/insertionSort";
import { bubbleSort } from "./algorithms/bubbleSort";
import { mergeSort } from "./algorithms/mergeSort";

const algorithms = [
  { name: "Insertion Sort", algorithm: insertionSort },
  { name: "Bubble Sort", algorithm: bubbleSort },
  { name: "Merge Sort", algorithm: mergeSort },
];

const App = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(parseInt(20));
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(
    algorithms[0].name
  );

  useEffect(() => {
    generateArray(size);
  }, [size]);

  const generateArray = (num) => {
    const newArray = Array.from(
      { length: num },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    console.log(newSize);
    if (newSize >= 5 && newSize <= 100) {
      setSize(newSize);
    } else {
      alert("Please enter a number between 5 and 100.");
    }
  };

  const startSorting = async () => {
    const selectedAlgo = algorithms.find(
      (algo) => algo.name === selectedAlgorithm
    );
    if (selectedAlgo) {
      await selectedAlgo.algorithm(array, setArray);
    }
  };

  return (
    <div className="App">
      <Header />
      <Controls
        size={size}
        handleSizeChange={handleSizeChange}
        generateArray={() => generateArray(size)}
        startSorting={startSorting}
        algorithms={algorithms}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />
      <SortingVisualizer array={array} />
    </div>
  );
};

export default App;
