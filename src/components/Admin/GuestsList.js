import React from "react";
import GuestsTable from "./GuestsTable";
import { CSVLink } from "react-csv";
import asc_icon from "../../assets/images/asc_icon.png";
import desc_icon from "../../assets/images/desc_icon.png";

import data from "../../assets/mock/guestsData.json";
import { Link } from "react-router-dom";
import style from "./GuestsList.module.css";

class GuestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      asc: true,
      icon: asc_icon,
      posAnswer: data.map((yes) => yes.answer).filter(Boolean).length, // TODO export function
      sum: data.reduce((prev, data) => {
        return data.answer ? prev + data.numberOfGuests : prev;
      }, 0),
    };

    this.sortBy = this.sortBy.bind(this); // TODO remove
  }

  // TODO export function
  sortBy(key, asc, icon) {
    this.setState({
      data: data.sort((a, b) =>
        asc[key] ? a[key] - b[key] : b[key] - a[key]
      ),
      asc: {
        [key]: asc[key] ? false : true,
      },
      icon: {
        [key]: icon[key] ? desc_icon : asc_icon,
      },
    });
  }

  // sortByLocal = (key) => {
  //     sortBy(key, this.state.asc, this.state.icon)
  // }

  render() {
      // TODO destructuring
    return (
      <div>
        <div className={style.header}>
        <h1>
          Combien seront present ?<div className={style.numberOfGuests}>{this.state.sum}</div>
        </h1>
        <h3>
          Combien seront present ? (pour l'instant que le nombre de true)
          <div>{this.state.posAnswer}</div>
          nombres de Reponse total <div>{this.state.data.length}</div>
        </h3>
        <button>
          <CSVLink data={this.state.data}>Export Guests List</CSVLink>
        </button>
        </div>
        {/*https://www.npmjs.com/package/react-csv*/}
        <div className={style.table}>
          <GuestsTable
            data={this.state.data}
            sortBy={this.sortBy}
            asc={this.asc}
            icon={this.icon}
          />
        </div>
      </div>
    );
  }
}

export default GuestsList;
