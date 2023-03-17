import React from 'react'
import Header from './Header'
import Info from './Info'
import Data from '../Data'


function App() {
  console.log(Data)
  return (
    <div>
      <Header/>
      <Info data={Data}/>
    </div>
  )
}

export default App