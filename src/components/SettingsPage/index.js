import Navbar from "../Navbar";
import SideBar from "../SideBar";
import "./index.css";

const SettingsPage = () => (
  <div className="transactions-page">
    <SideBar />
    <div className="transactions-container">
      <Navbar />
      <h1>No Settings at the moment.</h1>
    </div>
  </div>
);

export default SettingsPage;
