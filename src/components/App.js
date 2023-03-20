import React from 'react'
import Header from './Header'
import Info from './Info'
import Data from '../Data'
import Sidebar from './Sidebar'
import "./app.css"
import RightSection from './Right/RightSection'



function App() {
  console.log(Data)
  
  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <Info data={Data} />
      <RightSection />
      
    </div>
  )
}

export default App