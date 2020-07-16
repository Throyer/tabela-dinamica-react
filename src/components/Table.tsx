import React from "react";
import "./Table.css";
import TableOptions from "./TableOptions";

function Table<T>({ data, columns }: TableOptions<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ title: name, property }, index) => (
            <th key={index}>{name ?? property}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(
              ({ render, property, defaultValue }, prop) => {
                if (property) {
                  const types = ["number", "boolean", "string"];
                  const value = row[property];

                  if (value && types.includes(typeof value)) {
                    return <td key={prop}>{`${value}`}</td>;
                  }
                }

                if (render) {
                  const element = render(row);
                  if (element) {
                    return <td key={prop}>{element}</td>;
                  }
                }

                return <td key={prop}>{defaultValue ?? ""}</td>;
              }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
