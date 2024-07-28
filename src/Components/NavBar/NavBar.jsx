import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const imageData = [
  { name: "Chart", path: chart, route: "/plans" },
  { name: "Color Swatch", path: ColorSwatch, route: "/tools" },
  { name: "Health", path: Social, route: "/anallytics" },
  { name: "Home", path: Home, route: "/" },
  { name: "Notification", path: Notification, route: "/settings" },
  { name: "People", path: People, route: "/communities" },
  { name: "Profile", path: Profile, route: "/social" },
  { name: "Setting", path: Settings, route: "/settings" },
];

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, then navigate
    navigate("/Auth"); // Redirect to login page after logout
  };

  return (
    <div className="navbar h-full w-fit">
      {imageData.map((image, index) => (
        <Link
          to={image.route}
          key={index}
          className={`navbar-item ${location.pathname === image.route ? 'active' : ''}`}
        >
          <img src={image.path} alt={image.name} />
        </Link>
      ))}
      <div className="spacer"></div>
      <div className="logout" onClick={handleLogout}>
        <hr></hr>
        <img src={Logout} alt="logout.png" />
      </div>
    </div>
  );
}
