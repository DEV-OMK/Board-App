import Navbar from "../Navbar";
import SideBar from "../SideBar";
import "./index.css";

const UsersPage = () => (
  <div className="transactions-page">
    <SideBar />
    <div className="transactions-container">
      <Navbar />
      <h1>No Users at the moment.</h1>
    </div>
  </div>
);

export default UsersPage;
