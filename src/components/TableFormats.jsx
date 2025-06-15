import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentActiveTable } from "../reducers/tableSlice";

const TableFormats = () => {
  const dispatch = useDispatch();
  const [formatsTables, setFormatsTables] = useState([
    { typeNo: 1, name: "Format-1" },
    { typeNo: 2, name: "Format-2" },
    { typeNo: 3, name: "Format-3" },
    { typeNo: 4, name: "Format-4" },
    { typeNo: 5, name: "Format-5" },
    { typeNo: 6, name: "Format-6" },
  ]);
  const setCurrentActiveTable = (nameOfTable) => {
    dispatch(updateCurrentActiveTable(nameOfTable));
  };

  return (
    <div className="formats">
      {formatsTables.map((table) => (
        <div
          className="format"
          key={table.name}
          onClick={() => setCurrentActiveTable(table.name)}
        >
          <div className="tableType">{table.typeNo}</div>
          <p>{table.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TableFormats;
