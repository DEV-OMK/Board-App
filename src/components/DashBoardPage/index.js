import { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import DataCards from "../DataCards";
import BarChartCard from "../BarChartCard";
import PieChartCard from "../PieChartCard";
import ProfileCard from "../ProfileCard";

import "./index.css";
import AddNewProfile from "../AddNewProfile";

const DashBoardPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [addNewProfile, setAddNewProfile] = useState(false);

  let profileData = { name, phone, email, instagram, youtube };

  return (
    <div className="dash-board-page">
      <SideBar />
      <div className="dashboard-container">
        <Navbar />
        <DataCards />
        <BarChartCard />
        <div className="dashboard-inside-container">
          <PieChartCard />
          <ProfileCard
            profileData={profileData}
            setAddNewProfile={setAddNewProfile}
          />
        </div>
      </div>
      {addNewProfile && (
        <AddNewProfile
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setInstagram={setInstagram}
          setYoutube={setYoutube}
          setAddNewProfile={setAddNewProfile}
        />
      )}
    </div>
  );
};

export default DashBoardPage;
