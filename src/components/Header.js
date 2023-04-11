import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { TextField , IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';



//import {useState, useEffect} from "react"


function Header({setSearch}) {
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
        {/* <input
          type='text'
          placeholder='Search Posts'
          onChange={(e)=> setSearch(e.target.value)}
          className="search-input"
  /> */}
          <TextField
            variant='filled'
            type='search'
            label='Search for posts'
            onChange={(e)=> setSearch(e.target.value)}
            sx={{ borderRadius:'50%', width: 1/3, margin:4, color: 'primary.contrastText', }}
            InputProps={{ endAdornment:<IconButton position="end">
              <SearchIcon/>
            </IconButton> }}

          />
        <ul>
            <li>WHAT WE DO</li>
            <li>WHO WE ARE</li>
            <Link to='signup'><li>SIGN UP</li></Link>
            {/* <Link to="apps"><li>APPS</li></Link> */}
            <li>CAREERS</li>
            {/* <Link to='terms-and-conditions'>Terms and Condition</Link> */}
        </ul>
    </div>
  )
}

export default Header