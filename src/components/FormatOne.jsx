import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormatOne = () => {
  const dispatch = useDispatch();
  // const formatOneTableData = useSelector((store) => store.table.formatOne);

  const [tableData, setTableData] = useState([
    {
      slNo: "Sl No",
      date: "Date",
      description: "Description",
      nos: "Nos",
      unit: "Unit",
      ratePerUnit: "Rate/ Unit",
      amount: "Amount",
    },
    {
      slNo: "1",
      date: "14-06-2025",
      description: "Product 1",
      nos: "5",
      unit: "Nos",
      ratePerUnit: "100",
      amount: "500",
    },
    {
      slNo: "2",
      date: "14-06-2025",
      description: "Product 2",
      nos: "5",
      unit: "Nos",
      ratePerUnit: "100",
      amount: "500",
    },
    {
      slNo: "3",
      date: "14-06-2025",
      description: "Product 3",
      nos: "5",
      unit: "Nos",
      ratePerUnit: "100",
      amount: "500",
    },
    {
      slNo: "4",
      date: "14-06-2025",
      description: "Product 4",
      nos: "5",
      unit: "Nos",
      ratePerUnit: "100",
      amount: "500",
    },
    {
      slNo: "5",
      date: "14-06-2025",
      description: "Product 5",
      nos: "5",
      unit: "Nos",
      ratePerUnit: "100",
      amount: "500",
    },
  ]);

  const handleChange = (event, rowIndex, field) => {
    const newData = [...tableData];
    newData[rowIndex][field] = event.target.value;
    setTableData(newData);
  };

  return (
    <div className="format-container">
      <div className="format-table">
        {tableData.map((row, rowIndex) => (
          <div key={rowIndex} className="format-table__row">
            {Object.keys(row).map((field) => (
              <div
                contentEditable="true"
                suppressContentEditableWarning="true"
                key={field}
                onChange={(event) => handleChange(event, rowIndex, field)}
                className={field}
              >
                {row[field]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormatOne;
