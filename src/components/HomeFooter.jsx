import {
  HomeIcon,
  PhoneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import HomeNavButton from "./HomeNavButton";

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <HomeNavButton navComponent={<HomeIcon />} navName={"Home"} />
      <HomeNavButton navComponent={<PlusCircleIcon />} navName={"New"} />
      <HomeNavButton navComponent={<PhoneIcon />} navName={"Calls"} />
    </div>
  );
};

export default HomeFooter;
