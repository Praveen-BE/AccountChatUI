import React from "react";
import SearchBar from "../components/SearchBar";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SearchViewList from "../components/SearchViewList";
import useFetchUserData from "../hooks/useFetchUserData.js";

const AddNewContact = () => {
  useFetchUserData();
  return (
    <div>
      <div className="new-back">
        {" "}
        <ArrowLeftIcon />
      </div>
      <SearchBar />
      <SearchViewList />
    </div>
  );
};

export default AddNewContact;
