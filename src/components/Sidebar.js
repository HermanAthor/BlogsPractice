import React from 'react'
import "./sidebar.css"

import { FaHome, FaRegKissBeam, FaUserFriends, FaRegHandRock, FaRegHandPeace, FaChild, FaRegCalendarAlt, FaTools  } from 'react-icons/fa';



function Sidebar() {
  // if(!data){
  //   return null
  // }
  
  return (
    <div className='sidebar-container'>
      <ul>
        <li><span><FaHome /></span>Home</li>
        <li><span><FaRegKissBeam/></span>Profile</li>
        <li><span><FaUserFriends/></span>Friends</li>
        <li><span><FaRegHandRock/></span>What we do</li>
        <li><span><FaRegHandPeace/></span>Who we are</li>
        <li><span><FaChild/></span>Community</li>
        <li><span><FaRegCalendarAlt/></span>Contact us</li>
        <li><span><FaTools/></span>Settings</li>
      </ul>
    </div>
  )
  
}

export default Sidebar