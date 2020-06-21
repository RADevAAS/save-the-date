import React from "react";
import asc_icon from "../../assets/images/asc_icon.png";
import desc_icon from "../../assets/images/desc_icon.png";

import style from "./Table.module.css";

//import style from "./Table.module.css";

// DONE reductio maintenant faut faire une sorte de func dans utils pour combine avec BudgetTable
export default function GuestsTable(props) {
  const renderColumnHeader = (key) => {
    return (
      <th className={style.tableHeader} onClick={() => props.sortBy(key)}>
        {key} <img alt="" src={props.asc[key] ? desc_icon : asc_icon} />
      </th>
    );
  };

  const columns = [
    "firstName",
    "lastName",
    "answer",
    "numberOfGuests",
    "tel",
    "email",
  ];

  return (
    <div>
      <table>
        <thead>{columns.map((key) => renderColumnHeader(key))}</thead>
        <tbody>
          {props.data.map((row) => (
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
    </div>
  );
}
