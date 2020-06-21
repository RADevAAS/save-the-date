import React from "react";
import GuestsTable from "./GuestsTable";
import { CSVLink } from "react-csv";
import asc_icon from "../../assets/images/asc_icon.png";
import desc_icon from "../../assets/images/desc_icon.png";

import data from "../../assets/mock/guestsData.json";
import style from "./GuestsList.module.css";

import { trueCounter } from "../../utils";
//import { sortBy } from "../../utils";

class GuestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      asc: true,
      icon: asc_icon,
      trueCount: trueCounter(data, 'answer'), // DONE export function
      sum: data.reduce((prev, data) => {
        return data.answer ? prev + data.numberOfGuests : prev;
      }, 0),
    };

  }

  // TODO export function  il faudrait quon se pose dessus pour la mettre en place
  sortBy = (key, asc, icon) => {
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

   render() {
      // DONE destructuring
      const { sum, trueCount, data, asc, icon} = this.state;

    return (
      <div>
        <div className={style.header}>
        <h1>
          Combien seront present ?<div className={style.numberOfGuests}>{sum}</div>
        </h1>
        <h3>
          Combien seront present ? (pour l'instant que le nombre de true)
          <div>{trueCount}</div>
          nombres de Reponse total <div>{data.length}</div>
        </h3>
        <button>
          <CSVLink data={data}>Export Guests List</CSVLink>
        </button>
        </div>
        {/*https://www.npmjs.com/package/react-csv*/}
        <div className={style.table}>
          <GuestsTable
            data={data}
            sortBy={this.sortBy}
            asc={asc}
            icon={icon}
          />
        </div>
      </div>
    );
  }
}

export default GuestsList;
