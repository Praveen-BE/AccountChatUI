import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addUserData, removeUserData } from "../reducers/userSlice";
import { useNavigate } from "react-router";

const useFetchUserData = async () => {
  const userData = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      fetchUserData();
    }
  }, []);
  const fetchUserData = async () => {
    try {
      const res = await fetch(BASE_URL + "profile/user", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        if (res.status === 401) {
          dispatch(removeUserData());
          navigate("/auth");
        }
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // console.log(res);
      const data = await res.json();
      // console.log(data);
      dispatch(addUserData(data.data));
    } catch (err) {
      console.log("ERROR : " + err);
    }
  };
};

export default useFetchUserData;
