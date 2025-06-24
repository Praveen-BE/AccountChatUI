import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";

const SettingsPage = () => {
  const userData = useSelector((store) => store.user.userData);
  const [logoutMessage, setLogoutMessage] = useState(false);
  const navigate = useNavigate();
  if (!userData) {
    navigate("/auth");
  }
  const logoutAPIcall = async () => {
    try {
      const res = await fetch(BASE_URL + "auth/logout", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setLogoutMessage(true);
        setTimeout(() => {
          setLogoutMessage(false);
          navigate("/auth");
        }, 3000);
      }
    } catch (err) {
      console.log("Error :- " + err);
    }
  };
  const {
    firstName,
    lastName,
    emailId,
    mobileCountryCode,
    mobileNumber,
    profilePhotoUrl,
    about,
    contacts,
    privacy,
  } = userData;
  return (
    <div className="setting">
      <div className="setting-back">
        {" "}
        <ArrowLeftIcon />
      </div>
      <div className="setting-profile">
        <picture>
          <img src={profilePhotoUrl} alt={firstName + " user profile image"} />
        </picture>
        <p>
          <span>Name :- </span>
          {firstName || lastName ? firstName + lastName : "enithi user"}
        </p>
        <p>{about}</p>
      </div>
      <div className="setting-contact">
        <p>{mobileCountryCode + " " + mobileNumber}</p>
        <p>{emailId}</p>
      </div>
      <div className="setting-privacy">
        <div className="setting-privacy__profileImage">
          <h3>Prfile Setting</h3>
          <input type="radio" name="imagePrivacy" id="image-everyone" />
          <label for="image-everyone"> Everyone</label>
          <br />
          <input type="radio" name="imagePrivacy" id="image-myContacts" />
          <label for="image-myContacts"> My Contacts </label> <br />
          <input type="radio" name="imagePrivacy" id="image-nobody" />
          <label for="image-nobody"> Nobody</label>
        </div>
        <div className="setting-privacy__about">
          <h3>About</h3>
          <input type="radio" name="aboutPrivacy" id="about-everyone" />
          <label for="about-everyone"> Everyone</label>
          <br />
          <input type="radio" name="aboutPrivacy" id="about-myContacts" />
          <label for="about-myContacts"> My Contacts </label> <br />
          <input type="radio" name="aboutPrivacy" id="about-nobody" />
          <label for="about-nobody"> Nobody</label>
        </div>
        <button className="setting-logout" onClick={() => logoutAPIcall()}>
          Logout
        </button>
      </div>
      <h2 className="logout-message">
        {logoutMessage ? "Successfully Logout...!" : ""}
      </h2>
    </div>
  );
};

export default SettingsPage;
