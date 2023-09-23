import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import "./index.css";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="navbar">
      <section>
        <h1 className="navbar-title">Dashboard</h1>
        <FaBarsStaggered
          className="navbar-hamburger-icon"
          onClick={() => {
            document
              .getElementById("sideBar")
              .classList.remove("side-bar-hide");
          }}
        />
      </section>
      <section>
        <fieldset>
          <input
            type="search"
            value={searchInput}
            className="navbar-search-bar"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <BiSearch className="navbar-search-icon" />
        </fieldset>
        <MdNotificationsNone className="navbar-notification-icon" />
        <img
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1683529236/cld-sample.jpg"
          alt="profile"
          className="navbar-profile"
        />
      </section>
    </div>
  );
};

export default Navbar;
