import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import useSearchNewContact from "../hooks/useSearchNewContact";
import { updateNewSearchNumberList } from "../reducers/newSearchSlice.js";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [newContactSearch, setNewContactSearch] = useState("");
  const searchNewContact = useSearchNewContact();
  const dispatch = useDispatch();

  useEffect(() => {
    return setNewContactSearch("");
  }, []);

  const handleSearchNewContact = async () => {
    const data = await searchNewContact(newContactSearch);
    // console.log(data);
    dispatch(updateNewSearchNumberList(data.data[0]));
  };

  return (
    <div className="search">
      <input
        className="search-input"
        onChange={(event) => setNewContactSearch(event.target.value)}
        placeholder="Search Here"
      />
      <button className="search-btn" onClick={() => handleSearchNewContact()}>
        <MagnifyingGlassIcon className="search-btn__icon" />
      </button>
    </div>
  );
};

export default SearchBar;
