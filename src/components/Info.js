import React from 'react'
import "./info.css"
import Blogs from './Blogs'


function Info({data}) {
    
    
    const[like, setlike]= React.useState(0)
    const[dislike, setDislike]= React.useState(0)
    const[search, setSearch]= React.useState('')
    function handleLike(){
        return setlike(like + 1)
    }
    function handleDislike(){
        return (setDislike(like + 1))
    };
    return(
        <div>
            <h1>Home</h1>
            <input
                type='text'
                placeholder='Search Posts'
                onChange={(e)=> setSearch(e.target.value)}
            />
            {
                data.filter((post) => {
                    if(search === ''){
                        return post
                    }else if (
                        post.name.toLowerCase().includes(search.toLowerCase())||
                        post.title.toLowerCase().includes(search.toLowerCase())
                        ){
                        return post
                    }
                }).map((item)=>{
                    const {id, name, title,image} = item
                    return(
                        <div className='info-container' key={id}>
                            <img src={image} alt="imag"/>
                            <h3>{name}</h3>
                            <p>{title}</p>
                            <button 
                            className='like' 
                            onClick={handleLike}
                            key={id}
                            value={id}
                            >
                                Like <span>{like}</span>
                            </button>
                            <button 
                            className='dislike' 
                            onClick={handleDislike}
                            key={id}
                            value={id}
                            >
                            Dislike <span>{dislike}</span>
                            </button>
                            <button>Follow +</button>
                        </div>
                    )
                })
            }
            <Blogs/>
             
        </div>
    )
}

export default Info