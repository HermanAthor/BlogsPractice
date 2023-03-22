import React from 'react'
import "./info.css"


function Info({data}) {
    const[like, setlike]= React.useState(0)
    const[dislike, setDislike]= React.useState(0)
    function handleLike(){
        return setlike(like + 1)
    }
    function handleDislike(){
        return (setDislike(like + 1))
    }

    
    return (

    <div>
        {data.map((item) =>(
            <div  className='info-container' key={item.id}>
                 <img src={item.image} alt="imag"/>
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                    <button 
                    className='like' 
                    onClick={handleLike}
                    key={item.id}
                    value={item.id}
                    >
                        Like <span>{like}</span>
                    </button>
                    <button 
                    className='dislike' 
                    onClick={handleDislike}
                    key={item.id}
                    value={item.id}
                    >
                    Dislike <span>{dislike}</span>
                    </button>
                    <button>Follow +</button>
        
            </div>))
        }
            
        
    </div>
  )
}

export default Info