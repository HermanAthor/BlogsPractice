import React from 'react'
import Header from './Header'
// import Info from './Info'
import Data from '../Data'
import Sidebar from './Sidebar'
import "./app.css"
import RightSection from './Right/RightSection'
import MainContent from './MainContent'
import { Grid, Box } from '@mui/material'


function App() {
  const[search, setSearch]= React.useState('')
  console.log(Data)
  
  return (
    <Grid container spacing={0} sx={{ }}>
      <Grid item xs={12}>
        <Header setSearch={setSearch}/>
      </Grid>
      <Grid item xs={2} sx={{mt:'100px' }}>
        <Sidebar/>
      </Grid>
      <Grid item xs={6}>
        <MainContent search={search}/>
      </Grid>
      <Grid item xs={4}>
        <RightSection/>
      </Grid>
    </Grid>
    
  )
}

export default App


/* 
<Info data={Data} /> 
<Sidebar />
*/




      // <Header setSearch={setSearch}/>
      // <Sidebar />
      // <MainContent search={search}/>
      // <RightSection />

      // <div className='app-container'>
      
      
      // </div>