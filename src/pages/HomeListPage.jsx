import React from "react";
import SearchBar from "../components/SearchBar";
import HomeListContainer from "../components/HomeListContainer";

const HomeListPage = () => {
  return (
    <div className="home-page">
      <SearchBar />
      <HomeListContainer />
    </div>
  );
};

export default HomeListPage;
