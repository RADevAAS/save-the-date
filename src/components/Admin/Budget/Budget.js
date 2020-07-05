import React, { Component } from "react";
import BudgetTable from "./BudgetTable";
import { CSVLink } from "react-csv";

import data from "../../../assets/mock/budgetData.json";
import style from "../GuestList/GuestsList.module.css";
import ProgressBar from "../../ProgressBar/ProgressBar";

import { trueCounter } from "../../../utils";

const Columns = ["name", "tel", "email", "advance", "amount", "payed"];

export class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data, 
      asc: {},
      payedCounter: trueCounter(data, "payed"),
      sum: data.reduce((prev, data) => {
        return data.payed ? prev + data.amount : prev + data.advance;
      }, 0),
      total: data.reduce((prev, data) => prev + data.amount, 0),
    };
  }

  // FIXME fix logic
  sortBy = (key) => {
    const { asc } = this.state;
    const sortedData = data.sort((a, b) => {
      if (asc) {
        if (a[key] > b[key]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a[key] < b[key]) {
          return 1;
        } else {
          return -1;
        }
      }
    });

    this.setState({
      data: sortedData,
      asc: {
        [key]: !this.state.asc[key],
      },
    });
  };

  render() {
    // DONE destructuring
    const { sum, total, payedCounter, data, asc } = this.state;
    const percentOfTotal = ((sum / total) * 100).toFixed(2);

    return (
      <div>
        <div>
          Combien ont ete payer ? (pour l'instant que le nombre de true)
          <div>{payedCounter}</div>
          Combien on a deja paye ? (avec les avances)<div>{sum}</div>
        </div>
        <div>
          Total a paye <div>{total}</div>
        </div>
        <div>
          Pourcent paye <div>{percentOfTotal}%</div>
        </div>
        <div className={style.progressBar}>
          <ProgressBar completed={percentOfTotal} />
        </div>
        <div>
          nombres de truc a paye en tout <div>{data.length}</div>
        </div>
        <button>
          <CSVLink data={data}>Export Budget List</CSVLink>
        </button>
        <div className={style.table}>
          <BudgetTable
            data={data}
            sortBy={this.sortBy}
            asc={asc}
            columns={Columns} //FIXME pass array to props
          />
        </div>
      </div>
    );
  }
}

export default Budget;
