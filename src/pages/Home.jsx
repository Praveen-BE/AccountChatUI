import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import HomeFooter from "../components/HomeFooter.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant.js";
import { addUserData, removeUserData } from "../reducers/userSlice.js";

const Home = () => {
  const userData = useSelector((store) => store.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch(BASE_URL + "profile/user", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        if (res.status === 401) {
          dispatch(removeUserData());
          navigate("/auth");
        }
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // console.log(res);
      const data = await res.json();
      // console.log(data);
      dispatch(addUserData(data.data));
    } catch (err) {
      console.log("ERROR : " + err);
    }
  };

  return (
    <div className="home">
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Home;
