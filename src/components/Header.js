import React from 'react'
import "./header.css"
import {useState, useEffect} from "react"


function Header() {
  const[onScroll, setOnScroll] = useState(false)

  function handleScroll(){
    const scrollConst = window.pageYOffset
    if(scrollConst > 0 && onScroll){
      setOnScroll((prevOnScroll)=> !prevOnScroll)
    }else if(scrollConst === 0 && !onScroll){
      setOnScroll(true)
    }
  }

  function handleS(){
    setOnScroll((prevOnScroll)=> !prevOnScroll)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleS())
    return ()=>{
      window.removeEventListener('scroll', handleScroll())
    }
  },)
  
  

  return (
     
    <div className={onScroll? "header-container" : "hidden"}>
        <h1>INSTRUMENT</h1>
        <ul>
            <li>WHAT WE DO</li>
            <li>WHO WE ARE</li>
            <li>BEING HERE</li>
            <li>CAREERS</li>
        </ul>
    </div>
  )
}

export default Header