import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

import style from "./EventView.module.css";

export class EventView extends Component {
  render() {
    return (
      <div>
        <div className={style.background}>
          <div className={style.details}>
            <p>Bienvenue sur votre organisateur d'evenement.</p>
            <p>Ci-dessous vous trouverez un resume de vos informations.</p>
            <p>Naviguez dans les menus pour plus de details.</p>
          </div>
          <div className={style.stats}>
            <div >
              <PieChart
                data={[
                  { title: "Presents", value: 80, color: "#1aff1a" },
                  { title: "Absents", value: 15, color: "#ff1a1a" },
                ]}
                style={{ height: "200px" }}
                animate
                label={({ dataEntry }) => dataEntry.value + "%"}
                labelStyle={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                }}
              />
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
                style={{ height: "100px" }}
              />
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
                style={{ height: "100px" }}
              />
            </div>
            <div>
              <div>Invites</div>
              <div>Budget</div>
              <div>House</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventView;
