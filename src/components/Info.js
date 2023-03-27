import React from 'react'
import "./info.css"



function Info({data, search}) {
    
    
    const[like, setlike]= React.useState(0)
    const[dislike, setDislike]= React.useState(0)
    // const[search, setSearch]= React.useState('')
    const [comment, setComment]= React.useState('')
    const [comments, setComments]= React.useState([])
    const [addComment, setAddComment]= React.useState(false)
    function handleLike(){
        return setlike(like + 1)
    }
    function handleDislike(){
        return (setDislike(like + 1))
    }
    function handleAddComment(){
        setAddComment((prevAddComment)=>!prevAddComment)
    }
    function handleChange(e){
        setComment(e.target.value)
    }
    function handleOnClick (){
        setComments((prevComments)=>[...prevComments, comment])
        setComment('')
    }
        
    
    return(
        <div>
            <h1>Home</h1>
            {/* <input
                type='text'
                placeholder='Search Posts'
                onChange={(e)=> setSearch(e.target.value)}
            /> */}
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
                            
                            {addComment && 
                                <div>
                                    <div>
                                        <h3>Comments</h3>
                                        {comments.map((text, index) => (
                                            <div key={index}>
                                                {text}
                                            </div>))
                                        } 
                                    </div> 
                                
                                    <div className='comment-area'>
                                        <textarea 
                                        name="comment" 
                                        id="comment" 
                                        cols="2" 
                                        rows="2"
                                        onChange={handleChange}
                                        value={comment}
                                        >
                                        </textarea>
                                        <button onClick={handleOnClick}> Comment</button>
                                    </div>
                                </div>
                            }
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
                            <button onClick={handleAddComment}>{addComment? 'Close Comments': 'Add Comments'}</button>
                        </div>
                    )
                })
            }
            
             
        </div>
    )
}

export default Info