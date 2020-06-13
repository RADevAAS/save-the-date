import React, { Component } from "react";
import BudgetTable from "./BudgetTable";
import { CSVLink } from "react-csv";
import asc_icon from "../../data/asc_icon.png";
import desc_icon from "../../data/desc_icon.png";

import data from "../../data/budgetData.json";
import style from "./GuestsList.module.css";

export class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: "asc",
      icon: { asc_icon },
      payed: data.map((yes) => yes.payed).filter(Boolean).length,
      sum: data.reduce((prev, data) => {
        return data.payed ? prev + data.amount : prev + data.advance;
      }, 0),
      total: data.reduce((prev, data) => prev + data.amount, 0),
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc" ? a[key] - b[key] : b[key] - a[key]
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc",
      },
      icon: this.state.direction[key] === "asc" ? { desc_icon } : { asc_icon },
    });
  }

  render() {
    const percentOfTotal = ((this.state.sum / this.state.total) * 100).toFixed(2);
    
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
            icon={this.icon}
          />
        </div>
      </div>
    );
  }
}

export default Budget;
