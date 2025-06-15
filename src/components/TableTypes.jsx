import React from "react";
import TableFormats from "./TableFormats";
import FormatOne from "./FormatOne";
import { useSelector } from "react-redux";

const TableTypes = () => {
  const currentActiveTable = useSelector(
    (store) => store.table.currentActiveTable
  );
  return (
    <div className="chat-input__tables">
      <h2>New Table</h2>
      {currentActiveTable ? <FormatOne /> : <TableFormats />}
    </div>
  );
};

export default TableTypes;
