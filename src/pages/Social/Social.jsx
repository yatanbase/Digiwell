import React from 'react'
import './social.css'
import Pfp from "../../assets/imgs/img1.png";
import Arrow from '../../assets/Icons/right.png'
import Ecclipse from '../../assets/social/ecclipse.png'
import Icon1 from '../../assets/social/calendar.png'
import Icon2 from '../../assets/social/gps.png'
import Icon3 from '../../assets/social/timer.png'

export default function Social() {
  return (
    <div className="social">
      <div className="social_header">
        <h3 style={{fontWeight:'bolder' , fontSize:'2rem'}}> Dashboard</h3>
        <div className="searchBar">
      <input class="search__input" type="text" placeholder="Discover Communities"/>
      </div>
      </div>
      <div className="social_sidePanel">

        <div className="side_top">
          <img src={Pfp} alt="" />
          <div className="title">
          <h4>Augustus</h4>
          <p>Lead Engineer</p>
          </div>
        </div>

        <div className="events">
          <div className="events_title">
          <h4>Upcoming Events   </h4>
          <div className="circle"></div>
          </div>

          <div className="event">
            <img src={Arrow} alt="" />
            <p>No Surf Briefing</p>
          </div>

          <div className="event">
            <img src={Arrow} alt="" />
            <p>True  Minimalism</p>
          </div>

          <div className="event">
            <img src={Arrow} alt="" />
            <p>No Internet Day</p>
          </div>

          < div className="seeMore"> See More</div>
        </div>

        <div className="RecentUsed">
          <div className="Recent_title">
          <h4>Recently Used   </h4>
          </div>

          <div className="event">
          <div className="circle" style={{backgroundColor:'lightblue',display:'flex',alignItems:'center',justifyContent:'center'}}> <img src={Icon3} alt="" /></div>
            <p>No Surf Briefing</p>
          </div>

          <div className="event">
          <div className="circle" style={{backgroundColor:'lightgreen',display:'flex',alignItems:'center',justifyContent:'center'}}> <img src={Icon2} alt="" /></div>
            <p>True  Minimalism</p>
          </div>

          <div className="event">
          <div className="circle" style={{backgroundColor:'lightpink',display:'flex',alignItems:'center',justifyContent:'center'}}> <img src={Icon1} alt="" /></div>
            <p>No Internet Day</p>
          </div>

        </div>



        <div className="timeStamp">
          <img src={Ecclipse} alt="asdf" />
          <div className="time">
          <h4 style={{ fontWeight:'bolder' , color:'#1ABC9C'}}>5h 21m</h4>
          <p>Time Usage</p>
          </div>
           </div>


      
      </div>
    </div>
  )
}
