import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

const testData = [{ completed: 60 }, { completed: 30 }, { completed: 53 }];

export class House extends Component {
  render() {
    return (
      <div>
        House
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
    );
  }
}

export default House;
