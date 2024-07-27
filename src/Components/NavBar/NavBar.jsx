import React from "react";
import "./navbar.css";
import chart from "../../assets/Icons/chart.png";
import ColorSwatch from "../../assets/Icons/color-swatch.png";
import Social from "../../assets/Icons/health.png";
import Home from "../../assets/Icons/home-hashtag.png";
import Notification from "../../assets/Icons/notification.png";
import People from "../../assets/Icons/people.png";
import Profile from "../../assets/Icons/profile-circle.png";
import Settings from "../../assets/Icons/setting-2.png";
import Logout from "../../assets/Icons/logout.png";

// Array of objects containing image names and paths
const imageData = [
  { name: "Chart", path: chart },
  { name: "Color Swatch", path: ColorSwatch },
  { name: "Health", path: Social },
  { name: "Home", path: Home },
  { name: "Notification", path: Notification },
  { name: "People", path: People },
  { name: "Profile", path: Profile },
  { name: "Setting", path: Settings },
];

export default function NavBar() {
  return (
    <div className="navbar h-full w-fit">
      {imageData.map((image, index) => (
        <div key={index} className={image.name.replace(/\s+/g, "-")}>
          <img src={image.path} alt={image.name} />
        </div>
      ))}
      <div className="spacer"></div>
      <div className="logout">
        <hr></hr>
        <img src={Logout} alt="logout.png" />
      </div>
    </div>
  );
}
