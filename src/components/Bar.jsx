import PropTypes from "prop-types";

const Bar = ({ value, index }) => {
  return (
    <div
      className="bar"
      style={{
        height: `${value * 3}px`,
        transform: `translateX(${index * 30}px)`,
      }}
    >
      <label className="bar__id">{value}</label>
    </div>
  );
};

Bar.PropType = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Bar;
