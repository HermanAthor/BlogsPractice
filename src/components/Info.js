import React from 'react'
import "./info.css"
function Info({data}) {
    
    return (

    <div className='Main-info-container'>
        {data.map((item) =>(
            <div  className='info-container' key={item.id}>
                <img src={item.image} alt="imag"/>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
        
            </div>))}
        
    </div>
  )
}

export default Info