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
    <Box sx={{ flexGrow: 1 }}>
      <Grid><Header setSearch={setSearch}/></Grid>
      <Grid container spacing={3}>
        <Grid xs="auto">
          <Sidebar/>
        </Grid>
        <Grid xs={6}>
          <MainContent search={search}/>
        </Grid>
        <Grid xs>
          <RightSection/>
        </Grid>
      </Grid>
    </Box>
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