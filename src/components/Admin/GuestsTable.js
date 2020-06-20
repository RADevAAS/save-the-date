import React from "react";
import asc_icon from "../../assets/images/asc_icon.png";
import desc_icon from "../../assets/images/desc_icon.png";

//import style from "./Table.module.css";

export default function GuestsTable(props) {
  return (
    <div>
      <table>
        <thead>
          <th onClick={() => props.sortBy("firstName")}>
            firstName <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
          <th onClick={() => props.sortBy("lastName")}>
            lastName <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
          <th onClick={() => props.sortBy("answer")}>
            answer <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
          <th onClick={() => props.sortBy("numberOfGuests")}>
            numberOfGuests <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
          <th onClick={() => props.sortBy("tel")}>
            tel <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
          <th onClick={() => props.sortBy("email")}>
            email <img alt="" src={props.asc ? desc_icon : asc_icon} />
          </th>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.name}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.answer ? "Yes" : "No"}</td>
              <td>{row.numberOfGuests}</td>
              <td>{row.tel}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
