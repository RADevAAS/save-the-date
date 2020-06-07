import React from "react";
import sort from "../../data/sort.png";

export default function GuestsTable(props) {
  return (
    <table>
      <thead>
        <th>
          <button onClick={() => props.sortBy("firstName")}>
            <sort />
            firstName
          </button>
        </th>
        <th>
          <button onClick={() => props.sortBy("lastName")}>lastName</button>
        </th>
        <th>
          <button onClick={() => props.sortBy("answer")}>answer</button>
        </th>
        <th>
          <button onClick={() => props.sortBy("numberOfGuests")}>
            numberOfGuests
          </button>
        </th>
        <th>
          <button onClick={() => props.sortBy("tel")}>tel</button>
        </th>
        <th>
          <button onClick={() => props.sortBy("email")}>email</button>
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
  );
}
