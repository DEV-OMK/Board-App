import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./index.css";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState();
  const path = useLocation();
  const { pathname } = path;

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("dashboard");
    } else {
      setActiveTab(pathname.slice(1));
    }
  }, [pathname]);

  return (
    <div className="side-bar side-bar-hide" id="sideBar">
      <header>
        <h1 className="side-bar-title">Board.</h1>
        <RxCross2
          className="side-bar-cross"
          onClick={() => {
            document.getElementById("sideBar").classList.add("side-bar-hide");
          }}
        />
      </header>
      <section>
        <Link to="/" className="link-item">
          <li
            key="dashboard"
            id="dashboard"
            className={
              activeTab === "dashboard"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={() => {
              setActiveTab("dashboard");
            }}
          >
            <img
              className="dashboard-icon"
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/dashboard_icon_utrbhk.png"
              alt="dashboardIcon"
            />
            Dashboard
          </li>
        </Link>
        <Link to="/transactions" className="link-item">
          <li
            key="transactions"
            id="transactions"
            className={
              activeTab === "transactions"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={(e) => {
              setActiveTab("transactions");
            }}
          >
            <img
              className="dashboard-icon"
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/transaction_icon_wxzkus.png"
              alt="transactionsIcon"
            />
            Transactions
          </li>
        </Link>
        <Link to="/schedules" className="link-item">
          <li
            key="schedules"
            id="schedules"
            className={
              activeTab === "schedules"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={(e) => {
              setActiveTab("schedules");
            }}
          >
            <img
              className="dashboard-icon"
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/schedule_icon_tdordx.png"
              alt="schedulesIcon"
            />
            Schedules
          </li>
        </Link>
        <Link to="/users" className="link-item">
          <li
            key="users"
            id="users"
            className={
              activeTab === "users"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={(e) => {
              setActiveTab("users");
            }}
          >
            <img
              className="dashboard-icon"
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/user_icon_lfujaq.png"
              alt="usersIcon"
            />
            Users
          </li>
        </Link>
        <Link to="/settings" className="link-item">
          <li
            key="settings"
            id="settings"
            className={
              activeTab === "settings"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={(e) => {
              setActiveTab("settings");
            }}
          >
            <img
              className="dashboard-icon"
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/setting_icon_ujq2pj.png"
              alt="settingsIcon"
            />
            Settings
          </li>
        </Link>
      </section>
      <footer>
        <p>Help</p>
        <p>Contact Us</p>
      </footer>
    </div>
  );
};

export default SideBar;
