import React from "react";
import SingleBanner from "../../components/Banner/SingleBanner";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar";
import AccountSettings from "../../components/UserProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../components/UserProfile/ChangePassword";
import img from "../../images/airplane.jpg";

const UserProfile = () => {
  const { activepage } = useParams();
  return (
    <div className="userprofile">
      <Navbar />
      <SingleBanner bannerimage={img} heading="My Profile" />
      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
