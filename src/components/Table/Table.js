import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";

export function Table(props) {
  const data = useMemo(() => props.tableData, []);
  const columns = useMemo(() => props.tableColumns, []);

  const tableInstance = useTable({
    data: data,
    columns: columns,
  });

  const { headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (props.theme === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (props.theme === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {props.tableTitle}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {headerGroups[0].headers.map((column) => (
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (props.theme === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                prepareRow(row);
                return <tr>{row.cells.map((cell) => cell.render("Cell"))}</tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Table.defaultProps = {
  theme: "light",
};

Table.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  tableTitle: PropTypes.string.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      Cell: PropTypes.func.isRequired,
    }).isRequired
  ),
};
