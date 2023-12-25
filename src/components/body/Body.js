import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
