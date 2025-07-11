import React from "react";
import { Link } from "react-router";

const ListElement = () => {
  return (
    <div className="element">
      <Link to={"/userPreview"} className="profile">
        {" "}
        <picture>
          <img
            src="https://th.bing.com/th/id/OIP.gwJZku_6nyHfbOwKTEbayQHaFj?rs=1&pid=ImgDetMain"
            alt="luffy profile"
          />
        </picture>
      </Link>

      <Link to={"/toUser"} className="element">
        <div className="element-info">
          <p>School Building</p>
          <small>Need Payment is very important for me urgernd please</small>
        </div>
      </Link>
    </div>
  );
};

export const ListElementPreviw = () => {
  return (
    <div className="element">
      <Link to={"/userPreview"} className="profile">
        <picture>
          <img
            src="https://th.bing.com/th/id/OIP.gwJZku_6nyHfbOwKTEbayQHaFj?rs=1&pid=ImgDetMain"
            alt="luffy profile"
          />
        </picture>
      </Link>
      <Link to={"/toUser"} className="element">
        <div className="element-info">
          <p>School Building</p>
          <small>New Enithi User</small>
        </div>
      </Link>
    </div>
  );
};

export default ListElement;
