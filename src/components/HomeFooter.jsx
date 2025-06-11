import {
  HomeIcon,
  PhoneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import HomeNavButton from "./HomeNavButton";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const HomeFooter = () => {
  const activeHome = useSelector((store) => store.page.activeHome);
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
