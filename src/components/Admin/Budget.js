import React, { Component } from "react";
import BudgetTable from "./BudgetTable";
import { CSVLink } from "react-csv";


import data from "../../assets/mock/budgetData.json";
import style from "./GuestsList.module.css";
import ProgressBar from "./ProgressBar";

export class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      asc: true,
      payed: data.map((yes) => yes.payed).filter(Boolean).length,
      sum: data.reduce((prev, data) => {
        return data.payed ? prev + data.amount : prev + data.advance;
      }, 0),
      total: data.reduce((prev, data) => prev + data.amount, 0),
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    const { asc } = this.state
    const sortedData = data.sort((a, b) => {
        if (asc) {
            if (a[key] > b[key]) {
                return 1
            } else {
                return -1
            }
        } else {
            if (a[key] < b[key]) {
                return 1
            } else {
                return -1
            }
        }
    })

    this.setState({
      data: sortedData,
      asc: {
        [key]: !this.state.asc[key],
      },
    });
  }

  render() {
    const percentOfTotal = ((this.state.sum / this.state.total) * 100).toFixed(
      2
    );

    return (
      <div>
        <div>
          Combien ont ete payer ? (pour l'instant que le nombre de true)
          <div>{this.state.payed}</div>
          Combien on a deja paye ? (avec les avances)<div>{this.state.sum}</div>
        </div>
        <div>
          Total a paye <div>{this.state.total}</div>
        </div>
        <div>
          Pourcent paye <div>{percentOfTotal}%</div>
        </div>
        <div className={style.progressBar}>
          <ProgressBar completed={percentOfTotal} />
        </div>
        <div>
          nombres de truc a paye en tout <div>{this.state.data.length}</div>
        </div>
        <button>
          <CSVLink data={this.state.data}>Export Budget List</CSVLink>
        </button>
        <div className={style.table}>
          <BudgetTable
            data={this.state.data}
            sortBy={this.sortBy}
            asc={this.state.asc}
          />
        </div>
      </div>
    );
  }
}

export default Budget;
