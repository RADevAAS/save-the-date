import React from "react";
import asc_icon from "../../assets/images/asc_icon.png";
import desc_icon from "../../assets/images/desc_icon.png";

import style from "./Table.module.css";

export default function BudgetTable(props) {
console.log(`%c ${new Date().toLocaleTimeString()}`,'color: greenyellow;', 'ln.8 - BudgetTable.BudgetTable(), props:', props)
  const renderColumnHeader = (key) => {
    return (
        <th className={style.tableHeader} onClick={() => props.sortBy(key)}>
          {key} <img alt="" src={props.asc[key] ? desc_icon : asc_icon} />
        </th>
    )
  }

  return (
    <table>
      <thead>
        {this.props.columns.map(key => renderColumnHeader(key))}
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.name}>
              {this.props.columns.map(key => {
                  if (key === 'payed') {
                      return <td className={style.tableRow}>{row.payed ? "Yes" : "No"}</td>
                  }
                  return <td className={style.tableRow}>{row[key]}</td>
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
