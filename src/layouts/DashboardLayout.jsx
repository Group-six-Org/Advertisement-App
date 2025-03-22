import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashNav from "../components/DashNav";
// import Overview from "../pages/dashboard/Overview";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 flex flex-col gap-y-4">
        <DashNav />
        {/* <Overview/> */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
