import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import data from '../../data/data';

function Countdown() {
  const {date} = data
  const calculateTimeLeft = () => {
    const difference = +new Date(`${date}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Countdown />, rootElement);

export default Countdown;