import React, { Component } from "react";

import { totalOfGuest, guestSum, budgetSum, budgetTotal } from "../../../utils";

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
            <p>
              Invites
              <PieChart
                data={[
                  { title: "Presents", value: guestSum, color: "#1aff1a" },
                  {
                    title: "Absents",
                    value: totalOfGuest - guestSum,
                    color: "#ff1a1a",
                  },
                ]}
                style={{ height: "200px", marginTop: "10px" }}
                animate
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                }}
              />
            </p>
            <p>
              Budget
              <PieChart
                data={[
                  { title: "Paye", value: budgetSum, color: "#1aff1a" },
                  {
                    title: "A Paye",
                    value: budgetTotal - budgetSum,
                    color: "#ff1a1a",
                  },
                ]}
                style={{ height: "200px", marginTop: "10px" }}
                animate
                label={({ dataEntry }) => dataEntry.value + "₪"}
                labelStyle={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                }}
              />
            </p>
            <p>
              House
              <PieChart
                data={[
                  { title: "Presents", value: 80, color: "#1aff1a" },
                  { title: "Absents", value: 15, color: "#ff1a1a" },
                ]}
                style={{ height: "200px", marginTop: "10px" }}
                animate
                label={({ dataEntry }) => dataEntry.value + "%"}
                labelStyle={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                }}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventView;
