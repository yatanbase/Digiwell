import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'; // Import the Navbar component correctly
import Profile from './components/Profile.jsx'
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div>Tracking & ANALytics</div>
      <Profile/>
    </div>
    
  );
}

export default App;
