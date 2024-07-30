import PropTypes from "prop-types";

const Controls = ({
  size,
  handleSizeChange,
  generateArray,
  startSorting,
  algorithms,
  setSelectedAlgorithm,
}) => {
  const handleAlgorithmSelection = (algoName) => {
    setSelectedAlgorithm(algoName);
    startSorting();
  };

  return (
    <div className="controls">
      <input
        type="number"
        id="inputSize"
        min="5"
        max="100"
        value={size}
        onChange={handleSizeChange}
      />
      <button className="btn1" onClick={generateArray} id="Button1">
        Generate New Array
      </button>
      <div className="algorithm-buttons">
        {algorithms.map((algo, index) => (
          <button
            key={index}
            className="btn2"
            onClick={() => handleAlgorithmSelection(algo.name)}
            id={`Button${index + 2}`}
          >
            {algo.name}
          </button>
        ))}
      </div>
      <div id="ele"></div>
    </div>
  );
};

Controls.propTypes = {
  size: PropTypes.number.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
  generateArray: PropTypes.func.isRequired,
  startSorting: PropTypes.func.isRequired,
  algorithms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedAlgorithm: PropTypes.func.isRequired,
};

export default Controls;
