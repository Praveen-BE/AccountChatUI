import React from "react";

const HomeNavButton = ({ navComponent, navName }) => {
  return (
    <div className="home-footer__btn">
      <div>{navComponent}</div>
      <p>{navName}</p>
    </div>
  );
};

export default HomeNavButton;
