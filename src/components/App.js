import React from 'react'
import Header from './Header'
// import Info from './Info'
import Data from '../Data'
import Sidebar from './Sidebar'
import "./app.css"
import RightSection from './Right/RightSection'
import MainContent from './MainContent'



function App() {
  console.log(Data)
  
  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <MainContent/>
      <RightSection />
      
    </div>
  )
}

export default App


/* 
<Info data={Data} /> 
<Sidebar />
*/