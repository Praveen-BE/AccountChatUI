import { Outlet } from "react-router";
import HomeFooter from "../components/HomeFooter.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import useFetchUserData from "../hooks/useFetchUserData.js";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((store) => store.user.userData);
  if (!userData) {
    useFetchUserData();
  }

  return (
    <div className="home">
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Home;
