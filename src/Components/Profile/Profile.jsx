import React from "react";
import Pfp from "../../assets/imgs/img1.png";
import "./profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profileBox">
        <div className="profilePic">
          <img src={Pfp} alt="profile.jpeg" />
        </div>
        <div className="profileHead">
          <span>Arthur</span>
          <p>Junior Developer</p>
        </div>
      </div>
    </div>
  );
}
