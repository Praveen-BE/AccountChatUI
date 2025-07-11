import {
  HomeIcon,
  PhoneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import React, { useEffect } from "react";
import HomeNavButton from "./HomeNavButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { updateActiveHomeNav } from "../reducers/pageSlice";

const HomeFooter = () => {
  const activeHome = useSelector((store) => store.page.activeHome);
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location.pathname);
  useEffect(() => {
    if (location.pathname == "/") {
      dispatch(updateActiveHomeNav("Home"));
    } else if (location.pathname == "/new") {
      dispatch(updateActiveHomeNav("New"));
    } else if (location.pathname == "/calls") {
      dispatch(updateActiveHomeNav("Calls"));
    }
  }, []);

  return (
    <div className="home-footer">
      <Link to={"/"}>
        <HomeNavButton
          navComponent={<HomeIcon />}
          navName={"Home"}
          activeHome={activeHome}
        />
      </Link>
      <Link to={"/new"}>
        <HomeNavButton
          navComponent={<PlusCircleIcon />}
          navName={"New"}
          activeHome={activeHome}
        />
      </Link>
      <Link to={"/calls"}>
        <HomeNavButton
          navComponent={<PhoneIcon />}
          navName={"Calls"}
          activeHome={activeHome}
        />
      </Link>
    </div>
  );
};

export default HomeFooter;
