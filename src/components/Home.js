import React from 'react'
import Blogs from './Blogs'
import Info from './Info'
import Data from '../Data'

function Home({search}) {
  return (
    <div>
        <Info data={Data} search={search}/>
        <Blogs/>
    </div>
  )
}

export default Home