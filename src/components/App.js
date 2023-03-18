import React from 'react'
import Header from './Header'
import Info from './Info'
import Data from '../Data'
import Sidebar from './Sidebar'
import "./app.css"



function App() {
  console.log(Data)
  
  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <Info data={Data} />
    </div>
  )
}

export default App