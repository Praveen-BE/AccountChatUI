import React from "react";
import { Link } from "react-router";

const ListElement = () => {
  return (
    <Link to={"/toUser"} className="element">
      <picture>
        <img
          src="https://th.bing.com/th/id/OIP.gwJZku_6nyHfbOwKTEbayQHaFj?rs=1&pid=ImgDetMain"
          alt="luffy profile"
        />
      </picture>
      <div className="element-info">
        <p>School Building</p>
        <small>Need Payment is very important for me urgernd please</small>
      </div>
    </Link>
  );
};

export default ListElement;
