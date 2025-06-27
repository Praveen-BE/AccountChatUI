import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import useFetchUserData from "../hooks/useFetchUserData";
import ShimmerChatPage from "../components/ShimmerChatPage";

const SettingsPage = () => {
  // const userData = useSelector((store) => store.user.userData);

  const [logoutMessage, setLogoutMessage] = useState(false);
  const [profilePrivacy, setProfilePrivacy] = useState("everyone");
  const [aboutPrivacy, setAboutPrivacy] = useState("everyone");
  const navigate = useNavigate();

  useFetchUserData();

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

  const userData = {
    userId: "6858ac73b1f226e57c381d66",
    firstName: "First Name",
    lastName: " last",
    emailId: "praveen@gmail.com",
    mobileCountryCode: "+91",
    mobileNumber: "6379500360",
    profilePhotoUrl:
      "https://th.bing.com/th?q=Default+Profile+Avatar+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    about: "This is a default about of the User",
    contacts: [],
    privacy: {
      profilePhoto: "everyone",
      about: "everyone",
    },
  };

  if (!userData) {
    return <ShimmerChatPage />;
  }
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
        <h3>
          <span>Name :- </span>
          {firstName || lastName ? firstName + lastName : "enithi user"}
        </h3>
        <p>{about}</p>
      </div>
      <div className="setting-contact">
        <p>{mobileCountryCode + " " + mobileNumber}</p>
        <p>{emailId}</p>
      </div>
      <div className="setting-privacy">
        <h3>Prfile Setting</h3>
        <div className="setting-privacy__profileImage">
          <label>
            <input
              type="radio"
              name="imagePrivacy"
              id="image-everyone"
              checked={profilePrivacy === "everyone" ? true : false}
              onChange={() => setProfilePrivacy("everyone")}
            />
            <span> Everyone</span>
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imagePrivacy"
              id="image-myContacts"
              checked={profilePrivacy === "myContacts" ? true : false}
              onChange={() => setProfilePrivacy("myContacts")}
            />
            <span>My Contacts</span>
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imagePrivacy"
              id="image-nobody"
              checked={profilePrivacy === "nobody" ? true : false}
              onChange={() => setProfilePrivacy("nobody")}
            />
            <span> Nobody</span>
          </label>
        </div>
        <h3>About</h3>
        <div className="setting-privacy__about">
          <label>
            <input
              type="radio"
              name="aboutPrivacy"
              id="about-everyone"
              checked={aboutPrivacy === "everyone" ? true : false}
              onChange={() => setAboutPrivacy("everyone")}
            />
            <span>Everyone</span>
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="aboutPrivacy"
              id="about-myContacts"
              checked={aboutPrivacy === "myContacts" ? true : false}
              onChange={() => setAboutPrivacy("myContacts")}
            />
            <span>My Contacts </span>
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              name="aboutPrivacy"
              id="about-nobody"
              checked={aboutPrivacy === "nobody" ? true : false}
              onChange={() => setAboutPrivacy("nobody")}
            />
            <span> Nobody</span>
          </label>
        </div>
        <div className="setting-logout">
          <button onClick={() => logoutAPIcall()}>Logout</button>
        </div>
      </div>
      <h2 className="logout-message">
        {logoutMessage ? "Successfully Logout...!" : ""}
      </h2>
    </div>
  );
};

export default SettingsPage;
