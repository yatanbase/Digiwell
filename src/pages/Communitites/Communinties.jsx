import React from 'react';
import './communities.css';
import Image1 from '../../assets/Communities/people.svg'
import Image2 from '../../assets/Communities/cat.png'
import Image3 from '../../assets/Communities/time.png'
import Image4 from '../../assets/Communities/yoga.png'
import Searchmono from '../../assets/Communities/searchlogo.png'




export default function Communities() {
  return (
    
    <div>
      <div className="searchContainer">
      <img src={Searchmono} alt="" />
      <div className="searchBar">
       
      <input class="search__input" type="text" placeholder="Discover Communities"/>
      
      </div>
      </div>
      <div className="content"><p>Most Popular Communities</p></div>
      <div className="popular_communities">

        <div className="cornerRounded1">
          <p>Manage your <span style={{color:'lightgreen'}}> time </span> effectively</p>
          <img src={Image1} alt="" />
        </div>

        <div className="cornerRounded2">
        <p>Heal your<span style={{color:'yellow'}}> burnout </span></p>
        <img src={Image2} alt="" />
        </div>

      
        <div className="cornerRounded3">
        <p>Manage your <span style={{color:'DARKblue'}}> time </span> effectively</p>
        <img src={Image3} alt="" />
        </div>

        <div className="cornerRounded4">
        <p>Begin your <span style={{color:'blue'}}> yoga </span> journey</p>
        <img src={Image4} alt="" />
        </div>



      </div>

   
      </div>
    
  );
}
