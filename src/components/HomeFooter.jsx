import {
  HomeIcon,
  PhoneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import HomeNavButton from "./HomeNavButton";
import { useSelector } from "react-redux";

const HomeFooter = () => {
  const activeHome = useSelector((store) => store.page.activeHome);
  return (
    <div className="home-footer">
      <HomeNavButton
        navComponent={<HomeIcon />}
        navName={"Home"}
        activeHome={activeHome}
      />
      <HomeNavButton
        navComponent={<PlusCircleIcon />}
        navName={"New"}
        activeHome={activeHome}
      />
      <HomeNavButton
        navComponent={<PhoneIcon />}
        navName={"Calls"}
        activeHome={activeHome}
      />
    </div>
  );
};

export default HomeFooter;
