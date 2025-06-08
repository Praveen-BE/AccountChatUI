import React from "react";
import { useDispatch } from "react-redux";
import { updateActiveHomeNav } from "../reducers/pageSlice";

const HomeNavButton = ({ navComponent, navName, activeHome }) => {
  const dispatch = useDispatch();
  const updateActiveHome = (clickedButton) => {
    dispatch(updateActiveHomeNav(clickedButton));
  };
  return (
    <button
      onClick={() => updateActiveHome(navName)}
      className="home-footer__btn"
    >
      <div className={navName == activeHome ? "activeIcon" : ""}>
        {navComponent}
      </div>
      <p className={navName == activeHome ? "activeText" : ""}>{navName}</p>
    </button>
  );
};

export default HomeNavButton;
