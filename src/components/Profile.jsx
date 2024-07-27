import React from 'react'
import Pfp from '../imgs/img1.png'
import './profile.css'

const Profile = () => {
  return (
    <div>
    <div className='profileBox'>
        
        
        <div className="profilePic">
            <img src={Pfp} alt="profile.jpeg" />
        </div>
        <div className="profileHead">
        <span>Arthur</span>
         <p>Junior Developer</p>
      


        </div>

        
        
        
        
        </div>
        </div>
  )
}

export default Profile