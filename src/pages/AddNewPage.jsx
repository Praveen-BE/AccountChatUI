import React from "react";
import { Link } from "react-router";
import useFetchUserData from "../hooks/useFetchUserData.js";

const AddNewPage = () => {
  useFetchUserData();
  return (
    <div className="new">
      <Link to={"/addContact"}>Add New Contact</Link>
      <Link to={"/creategroup"}>Create New Group</Link>
    </div>
  );
};

export default AddNewPage;
