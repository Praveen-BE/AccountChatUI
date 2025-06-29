import React from "react";
import SearchBar from "../components/SearchBar";
import HomeListContainer from "../components/HomeListContainer";
import useFetchUserData from "../hooks/useFetchUserData.js";

const HomeListPage = () => {
  useFetchUserData();
  return (
    <div className="home-page">
      <SearchBar />
      <HomeListContainer />
    </div>
  );
};

export default HomeListPage;
