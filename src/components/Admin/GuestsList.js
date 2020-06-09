import React from "react";
import GuestsTable from "./GuestsTable";
import { CSVLink, CSVDownload } from "react-csv";

import data from "../../data/guestsData.json";
import { Link } from "react-router-dom";

class GuestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: "asc",
      numberOfAnswer: data.length,
      posAnswer: data.map((yes) => yes.answer).filter(Boolean).length,
      sum : data.reduce((prev, data) => {
        return data.answer ? prev + data.numberOfGuests : prev;
      }, 0),
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
    });
  }

  render() {
    return (
      <div>
        <div>
          Combien seront present ? (pour l'instant que le nombre de true)
          <div>{this.state.posAnswer}</div>
          Combien seront present ? 
          <div>{this.state.sum}</div>
        </div>
        <div>
          nombres de Reponse total <div>{this.state.numberOfAnswer}</div>
        </div>
        <button>
          <CSVLink data={this.state.data}>Export Guests List</CSVLink>
        </button>
        <Link>https://www.npmjs.com/package/react-csv</Link>
        <div>
          <GuestsTable data={this.state.data} sortBy={this.sortBy} />
        </div>
      </div>
    );
  }
}

export default GuestsList;
