import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/AdminPanel/SideBar";

const CommonLayout = () => {


  return (
    <div className="grid grid-cols-12 p-4 mt-[30px] h-screen w-screen">
      <div className="col-span-1">
      <Sidebar/>
      </div>
      <main className="col-span-11 mt-20 sm:mt-0">
        <Outlet /> {/* Renders the matched child route element */}
      </main>
    </div>
  );
};

export default CommonLayout;
