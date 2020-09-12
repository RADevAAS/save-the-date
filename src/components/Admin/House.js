import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import { PieChart } from "react-minimal-pie-chart";

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
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
        ;

        <div>https://toomuchdesign.github.io/react-minimal-pie-chart/index.html?path=/story/interaction--click-mouseover-mouseout-callbacks</div>
      </div>
    );
  }
}

export default House;
