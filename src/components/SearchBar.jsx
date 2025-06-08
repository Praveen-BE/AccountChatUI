import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <input className="search-input" placeholder="Search Here" />
      <button className="search-btn">
        <MagnifyingGlassIcon className="search-btn__icon" />
      </button>
    </div>
  );
};

export default SearchBar;
