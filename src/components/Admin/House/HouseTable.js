import React from "react";

import { CSVLink } from "react-csv";

import houseData from "../../../assets/mock/houseData.json";

//import asc_icon from "../../../assets/images/asc_icon.png";
import desc_icon from "../../../assets/images/desc_icon.png";

import style from "../Table.module.css";

// DONE reductio maintenant faut faire une sorte de func dans utils pour combine avec BudgetTable
export default function HouseTable() {
  const renderColumnHeader = (key) => {
    return (
      <th className={style.tableHeader} onClick={() => houseData.sortBy(key)}>
        {key} <img alt="" src={desc_icon} />
      </th>
    );
  };

  const columns = [
    "name",
    "tel",
    "magasin",
    "advance",
    "amount",
    "payed"
  ];

  return (
    <div>
      <table>
        <thead>{columns.map((key) => renderColumnHeader(key))}</thead>
        <tbody>
          {houseData.map((row) => (
            <tr key={row.name}>
              {columns.map((key) => {
                if (key === "answer") {
                  return (
                    <td className={style.tableRow}>
                      {row.answer ? "Yes" : "No"}
                    </td>
                  );
                }
                return <td className={style.tableRow}>{row[key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <button>
        <CSVLink data={houseData}>Export Budget List</CSVLink>
      </button>
    </div>
  );
}
