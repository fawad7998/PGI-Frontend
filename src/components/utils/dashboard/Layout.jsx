import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../route/RoutConstant";

function Layout() {
  const sidebarRoutes = [
    AppRoutes.Dashboard,
    `${AppRoutes.Dashboard}/${AppRoutes.ShiftList}`,
    `${AppRoutes.Dashboard}${AppRoutes.ScheduleCalendar}`,
    `${AppRoutes.Dashboard}${AppRoutes.payRulesList}`,
  ];

  const location = useLocation();
  const currentUrl = location.pathname;

  // Check if the current URL matches any of the sidebar routes
  const showSidebar = sidebarRoutes.includes(currentUrl);
  return (
    <div>
      <div
        className={showSidebar ? "dashboard-grid" : "without-dashboard-grid"}
      >
        {showSidebar && (
          <div className="sidebar">
            <Sidebar />
          </div>
        )}
        <div className="navbar">
          {/* <Header /> */}
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>

      {/* <div className="without-dashboard-grid">
        <div className="navbar">
          <Header />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
}

export default Layout;
