import React, { Component } from "react";

import style from "./House.module.css";

import {
  trueCounterHouse,
  houseSum,
  houseTotal,
  percentOfTotalHouse,
} from "../../../utils";
import HouseTable from "./HouseTable";
import ProgressBar from "../../ProgressBar/ProgressBar";
import houseData from "../../../assets/mock/houseData.json";

export class House extends Component {
  render() {
    return (
      <div>
        <div>
          Combien ont ete payer ? (pour l'instant que le nombre de true)
          <div>{trueCounterHouse}</div>
          Combien on a deja paye ? (avec les avances)<div>{houseSum}</div>
        </div>
        <div>
          Total a paye <div>{houseTotal}</div>
        </div>
        <div>
          Pourcent paye <div>{percentOfTotalHouse}%</div>
        </div>
        <div className={style.progressBar}>
          <ProgressBar completed={percentOfTotalHouse} />
        </div>
        <div>
          nombres de truc a paye en tout <div>{houseData.length}</div>
        </div>

        <div className={style.table}>
          <HouseTable />
        </div>
      </div>
    );
  }
}

export default House;
