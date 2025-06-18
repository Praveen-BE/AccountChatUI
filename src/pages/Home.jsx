import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router";
import HomeFooter from "../components/HomeFooter.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((store) => store.user.userData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="home">
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Home;
