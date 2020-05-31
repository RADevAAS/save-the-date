import React from "react";
import style from "./CountdownYB.module.css";
import PropTypes from "prop-types";

const CounterUnit = (props) => {
  const { unit, unitText } = props;
  return (
    <div className={style.countdownSegment}>
      <span className={style.countdownSegmentNumber}>{unit}</span>
      <span className={style.countdownSegmentCaption}>
        {`${unitText}${unit > 1 ? "s" : ""}`}
      </span>
    </div>
  );
};

CounterUnit.propTypes = {
  unit: PropTypes.number.isRequired,
  unitText: PropTypes.string.isRequired,
};

export default CounterUnit;
