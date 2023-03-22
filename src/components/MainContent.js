import React from 'react'
import {Routes,Route} from "react-router-dom"
import Data from '../Data'
import ContactUs from './ContactUs'
import Info from './Info'
import "./mainContent.css"

function MainContent() {
  return (
    <div className='main-content'>
        <Routes>
            <Route path='info' element={<Info data={Data} />} />
            <Route path='contact-us' element={<ContactUs/>} />
        </Routes>
    </div>
  )
}

export default MainContent