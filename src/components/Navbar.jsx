import React from 'react';
import './navbar.css';

// Array of objects containing image names and paths
const imageData = [
  { name: 'Chart', path: '/assets/navbar/chart.png' },
  { name: 'Color Swatch', path: '/assets/navbar/color-swatch.png' },
  { name: 'Health', path: '/assets/navbar/health.png' },
  
  { name: 'Home', path: '/assets/navbar/home-hashtag.png' },
  { name: 'Notification', path: '/assets/navbar/notification.png' },
  { name: 'People', path: '/assets/navbar/people.png' },
  { name: 'Profile', path: '/assets/navbar/profile-circle.png' },
  { name: 'Setting', path: '/assets/navbar/setting-2.png' },
];

const Navbar = () => {
  return (
    <div className="navbar">
      {imageData.map((image, index) => (
        <div key={index} className={image.name.replace(/\s+/g, '-')}>
          <img src={image.path} alt={image.name} />
        </div>
      ))}
<div className="spacer"></div>
<div className='logout'>
<hr></hr>
<img src="/assets/navbar/logout.png" alt="logout.png" />
</div>
    </div>


  );
};

export default Navbar;
