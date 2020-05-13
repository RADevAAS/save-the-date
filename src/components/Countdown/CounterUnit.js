import React from "react";
import style from './CountdownYB.module.css';


const CounterUnit = (props) => {
    const {unit, unitText} = props
    return (
        <div className={style.countdownSegment}>
            <span className={style.countdownSegmentNumber}>
                {unit}
            </span>
            <span className={style.countdownSegmentCaption}>
                {`${unitText}${unit > 1 ? 's' : ''}`}
            </span>
        </div>
    )
}

export default CounterUnit;

