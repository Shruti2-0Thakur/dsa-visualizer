import PropTypes from "prop-types";
import Bar from "./Bar";

const SortingVisualizer = ({ array }) => {
  return (
    <section className="data-container">
      {array.map((value, index) => (
        <Bar key={index} value={value} index={index} />
      ))}
    </section>
  );
};

SortingVisualizer.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SortingVisualizer;
