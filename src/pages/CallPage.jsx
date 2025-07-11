import React from "react";
import useFetchUserData from "../hooks/useFetchUserData.js";

const CallPage = () => {
  useFetchUserData();
  return <div className="call">CallPage</div>;
};

export default CallPage;
