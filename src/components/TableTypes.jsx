import React from "react";
import TableFormats from "./TableFormats";
import FormatOne from "./FormatOne";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { updateisNewTableNotActive } from "../reducers/chatSlice";

const TableTypes = () => {
  const dispatch = useDispatch();
  const currentActiveTable = useSelector(
    (store) => store.table.currentActiveTable
  );
  return (
    <div className="chat-input__tables">
      <XMarkIcon
        className="close-icon"
        onClick={() => dispatch(updateisNewTableNotActive())}
      />
      <h2>New Table</h2>
      {currentActiveTable ? <FormatOne /> : <TableFormats />}
    </div>
  );
};

export default TableTypes;
