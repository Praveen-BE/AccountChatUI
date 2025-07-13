import React from "react";
import { BASE_URL } from "../utils/constant";

const useSearchNewContact = () => {
  return async (value) => {
    console.log(value);
    try {
      const res = await fetch(BASE_URL + "new/search/" + value, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export default useSearchNewContact;
