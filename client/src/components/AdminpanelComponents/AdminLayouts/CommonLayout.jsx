import { Outlet } from "react-router-dom";
import SideBar from "../../../pages/AdminPanel/SideBar";

const CommonLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-1">
        <SideBar/>
      </div>
      <main className="col-span-11">
        <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;