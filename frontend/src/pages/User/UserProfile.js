import React from "react";
import SingleBanner from "../../components/Banner/SingleBanner";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar";
import AccountSettings from "../../components/UserProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../components/UserProfile/ChangePassword";
import img from "../../images/websitepic.jpg";

const UserProfile = () => {
  const { activepage } = useParams();
  return (
    <div className="userprofile">
      <SingleBanner bannerimage={img} heading="My Profile" />
      <div className="userprofilein">
        <div className="left_profile">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right_profile">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
