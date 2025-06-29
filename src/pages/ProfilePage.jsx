import React from "react";
import useFetchUserData from "../hooks/useFetchUserData.js";

const ProfilePage = () => {
  useFetchUserData();
  return <div>ProfilePage</div>;
};

export default ProfilePage;
