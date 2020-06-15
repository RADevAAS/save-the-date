import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";


export class House extends Component {
  render() {
    return (
      <div>
       
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
          style={{ height:'100px' }}
        />
        

        <div>https://toomuchdesign.github.io/react-minimal-pie-chart/index.html?path=/story/interaction--click-mouseover-mouseout-callbacks</div>
      </div>
    );
  }
}

export default House;
