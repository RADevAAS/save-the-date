import React, { Component } from "react";
import BudgetTable from "./BudgetTable";

import budgetData from "../../../assets/mock/budgetData.json";

import style from "../GuestList/GuestsList.module.css";
import ProgressBar from "../../ProgressBar/ProgressBar";

import {
  trueCounterBudget,
  budgetSum,
  budgetTotal,
  percentOfTotalBudget,
} from "../../../utils";

export class Budget extends Component {
  render() {
    return (
      <div>
        <div>
          Combien ont ete payer ? (pour l'instant que le nombre de true)
          <div>{trueCounterBudget}</div>
          Combien on a deja paye ? (avec les avances)<div>{budgetSum}</div>
        </div>
        <div>
          Total a paye <div>{budgetTotal}</div>
        </div>
        <div>
          Pourcent paye <div>{percentOfTotalBudget}%</div>
        </div>
        <div className={style.progressBar}>
          <ProgressBar completed={percentOfTotalBudget} />
        </div>
        <div>
          nombres de truc a paye en tout <div>{budgetData.length}</div>
        </div>

        <div className={style.table}>
          <BudgetTable />
        </div>
      </div>
    );
  }
}

export default Budget;
