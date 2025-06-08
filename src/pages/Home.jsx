import React from "react";
import { Outlet } from "react-router";
import HomeFooter from "../components/HomeFooter.jsx";
import HomeHeader from "../components/HomeHeader.jsx";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Home;
