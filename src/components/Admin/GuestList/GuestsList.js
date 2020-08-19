import React from "react";
import GuestsTable from "./GuestsTable";

import style from "./GuestsList.module.css";

import { totalOfGuest, guestSum, trueAnswer, totalAnswer } from "../../../utils";


class GuestsList extends React.Component {
 


   render() {
    
    return (
      <div>
        <div className={style.header}>
        <h1>
          Combien seront present ?<div className={style.numberOfGuests}>{guestSum}</div>
        </h1>
        <h3>
          Combien seront present ? (pour l'instant que le nombre de true)
          <div>{trueAnswer}</div>
          nombres de Reponse total <div>{totalAnswer}</div>
          combien en tout ont repondu <div>{totalOfGuest}</div>
        </h3>
       
        </div>
       
        <div className={style.table}>
          <GuestsTable />
        </div>
      </div>
    );
  }
}

export default GuestsList;
