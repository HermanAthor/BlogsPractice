import React from 'react'
import {Routes,Route,} from "react-router-dom"
import ContactUs from './ContactUs'
import "./mainContent.css"
import WhatWeDo from './linked components/WhatWeDo'
import WhoWeAre from './linked components/WhoWeAre'
import Community from './linked components/Community'
import Settings from './linked components/Settings'
import ContactCard from './Right/ContactCard'
import Apps from './linked components/Apps'
import TermsAndConditions from './linked components/TermsAndConditions'
import Home from './Home'



function MainContent({search}) {
  return (
    <div className='main-content'>
        <Routes>
            <Route path='home' element={< Home search={search}/>} />
            <Route path='contact-us' element={<ContactUs/>}>
              <Route path='terms-and-conditions'element={<TermsAndConditions/>}/>
            </Route>
            <Route path='terms-and-conditions'element={<TermsAndConditions/>}/>
            <Route path='what-we-do' element={<WhatWeDo/>} />
            <Route path='who-we-are' element={<WhoWeAre/>} />
            <Route path='community' element={<Community/>} />
            <Route path='settings' element={<Settings/>} />
            <Route path='profile' element={<ContactCard/>} />
            <Route path='apps' element={<Apps/>} />
            
        </Routes>
        
    </div>
  )
}

export default MainContent