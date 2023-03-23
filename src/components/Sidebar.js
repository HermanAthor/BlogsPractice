import React from 'react'
import "./sidebar.css"
import {NavLink} from "react-router-dom"

import { FaHome, FaRegKissBeam, FaUserFriends, FaRegHandRock, FaRegHandPeace, FaChild, FaRegCalendarAlt, FaTools  } from 'react-icons/fa';



function Sidebar() {
  // if(!data){
  //   return null
  // }

  
  return (
    <div className='sidebar-container'>
      <ul>
        <NavLink to='info'><li><span><FaHome /></span>Home</li></NavLink>
        <li><span><FaRegKissBeam/></span>Profile</li>
        <li><span><FaUserFriends/></span>Friends</li>
        <li><span><FaRegHandRock/></span>What we do</li>
        <li><span><FaRegHandPeace/></span>Who we are</li>
        <li><span><FaChild/></span>Community</li>
        <NavLink to='contact-us'><li><span><FaRegCalendarAlt /></span>Contact Us</li></NavLink>
        <li><span><FaTools/></span>Settings</li>
      </ul>
    </div>
  )
  
}

export default Sidebar