import React from "react";
import "./navbar.css";

// Array of objects containing image names and paths
const imageData = [
  { name: "Chart", path: "../../assets/Icons/chart.png" },
  { name: "Color Swatch", path: "../../assets/Icons/color-swatch.png" },
  { name: "Health", path: "../../assets/Icons/health.png" },
  { name: "Home", path: "../../assets/Icons/home-hashtag.png" },
  { name: "Notification", path: "../../assets/Icons/notification.png" },
  { name: "People", path: "../../assets/Icons/people.png" },
  { name: "Profile", path: "../../assets/Icons/profile-circle.png" },
  { name: "Setting", path: "../../assets/Icons/setting-2.png" },
];

export default function NavBar() {
  return (
    <div className="navbar">
      {imageData.map((image, index) => (
        <div key={index} className={image.name.replace(/\s+/g, "-")}>
          <img src={image.path} alt={image.name} />
        </div>
      ))}
      <div className="spacer"></div>
      <div className="logout">
        <hr></hr>
        <img src="../../assets/Icons/logout.png" alt="logout.png" />
      </div>
    </div>
  );
}
