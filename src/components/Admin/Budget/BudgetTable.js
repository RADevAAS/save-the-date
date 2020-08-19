import React from "react";
// import asc_icon from "../../../assets/images/asc_icon.png";
import desc_icon from "../../../assets/images/desc_icon.png";

import budgetData from "../../../assets/mock/budgetData.json";

import { CSVLink } from "react-csv";

import style from "../Table.module.css";

// // FIXME fix logic
// sortBy = (key) => {
//   const { asc } = this.state;
//   const sortedData = data.sort((a, b) => {
//     if (asc) {
//       if (a[key] > b[key]) {
//         return 1;
//       } else {
//         return -1;
//       }
//     } else {
//       if (a[key] < b[key]) {
//         return 1;
//       } else {
//         return -1;
//       }
//     }
//   });

//   this.setState({
//     data: sortedData,
//     asc: {
//       [key]: !this.state.asc[key],
//     },
//   });
// };

export default function BudgetTable() {
  const renderColumnHeader = (key) => {
    return (
      <th className={style.tableHeader} onClick={() => budgetData.sortBy(key)}>
        {key} <img alt="" src={desc_icon} />
      </th>
    );
  };

  const columns = ["name", "tel", "email", "advance", "amount", "payed"];

  return (
    <div>
      <table>
        <thead>{columns.map((key) => renderColumnHeader(key))}</thead>
        <tbody>
          {budgetData.map((row) => (
            <tr key={row.name}>
              {columns.map((key) => {
                if (key === "payed") {
                  return (
                    <td className={style.tableRow}>
                      {row.payed ? "Yes" : "No"}
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
        <CSVLink data={budgetData}>Export Budget List</CSVLink>
      </button>
    </div>
  );
}
