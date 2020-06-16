import React from "react";
import asc_icon from "../../data/asc_icon.png";
import desc_icon from "../../data/desc_icon.png";

import style from "./Table.module.css";

export default function BudgetTable(props) {
  return (
    <table>
      <thead>
        <th className={style.tableHeader} onClick={() => props.sortBy("name")}>
          firstName <img alt="" src={props.asc ? desc_icon : asc_icon} />
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("tel")}>
          tel <img alt="" src={props.asc ? desc_icon : asc_icon} />
        </th>

        <th className={style.tableHeader} onClick={() => props.sortBy("email")}>
          email <img alt="" src={props.asc ? desc_icon : asc_icon} />
        </th>
        <th
          className={style.tableHeader}
          onClick={() => props.sortBy("advance")}
        >
          Advance <img alt="" src={props.asc ? desc_icon : asc_icon} />
        </th>
        <th
          className={style.tableHeader}
          onClick={() => props.sortBy("amount")}
        >
          Amount <img alt="" src={props.asc ? desc_icon : asc_icon} />
        </th>
        <th className={style.tableHeader} onClick={() => props.sortBy("payed")}>
          payed <img alt="" src={props.asc ? asc_icon : desc_icon} />
        </th>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.name}>
            <td className={style.tableRow}>{row.name}</td>
            <td className={style.tableRow}>{row.tel}</td>
            <td className={style.tableRow}>{row.email}</td>
            <td className={style.tableRow}>{row.advance}</td>
            <td className={style.tableRow}>{row.amount}</td>
            <td className={style.tableRow}>{row.payed ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
