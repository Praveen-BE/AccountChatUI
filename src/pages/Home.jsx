import React from "react";
import { Outlet } from "react-router";
import HomeFooter from "../components/HomeFooter";

const Home = () => {
  return (
    <div className="home">
      <div>Header</div>
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Home;
