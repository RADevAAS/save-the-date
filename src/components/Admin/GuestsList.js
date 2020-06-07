import React from "react";
import GuestsTable from "./GuestsTable";

import data from "../../data/guestsData.json";

class GuestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
      firstName: "asc",
      },
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
          Combien seront present ?<div>250</div>
        </div>
        <div>
          nombres de Reponse total <div>320</div>
        </div>
        <div>
          <GuestsTable data={this.state.data} sortBy={this.sortBy} />
        </div>
      </div>
    );
  }
}

export default GuestsList;
