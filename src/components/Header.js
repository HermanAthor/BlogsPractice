import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

//import {useState, useEffect} from "react"


function Header() {
  // const[onScroll, setOnScroll] = useState(true)

  // function handleScroll(){
  //   const scrollConst = window.pageYOffset
  //   if(scrollConst > 0 && onScroll){
  //     setOnScroll((prevOnScroll)=> !prevOnScroll)
  //   }else if(scrollConst === 0 && !onScroll){
  //     setOnScroll(true)
  //   }
  // }


  // useEffect(()=>{
  //   window.addEventListener('scroll', handleScroll())
  //   return ()=>{
  //     window.removeEventListener('scroll', handleScroll())
  //   }
  // },)
  
  

  return (
     
    <div className= "header-container">
        <h1>INSTRUMENT.</h1>
        <ul>
            <li>WHAT WE DO</li>
            <li>WHO WE ARE</li>
            <Link to="apps"><li>APPS</li></Link>
            <li>CAREERS</li>
            <Link to='terms-and-conditions'>Terms and Condition</Link>
        </ul>
    </div>
  )
}

export default Header