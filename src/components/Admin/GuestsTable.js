import React from "react";
import asc_icon from "../../data/asc_icon.png";
import desc_icon from "../../data/desc_icon.png";


import style from "./GuestsTable.module.css"

export default function GuestsTable(props) {

  icon = props.direction = "asc" ? {asc_icon} :{desc_icon};

  return (
    <table>
      <thead >
        <th className={style.tableHeader} onClick={() => props.sortBy("firstName")}>
            firstName <img alt="" src={icon} />
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("lastName")}>
          lastName
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("answer")}>
          answer
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("numberOfGuests")}>
            numberOfGuests
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("tel")}>
          tel
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("email")}>
          email
        </th>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.name}>
            <td className={style.tableRow} >{row.firstName}</td>
            <td className={style.tableRow}>{row.lastName}</td>
            <td className={style.tableRow}>{row.answer ? "Yes" : "No"}</td>
            <td className={style.tableRow}>{row.numberOfGuests}</td>
            <td className={style.tableRow}>{row.tel}</td>
            <td className={style.tableRow}>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
