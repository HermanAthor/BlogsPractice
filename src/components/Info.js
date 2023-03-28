import React from 'react'
import "./info.css"



function Info({data, search}) {
    const [posts, setPosts] = React.useState(data)
    console.log(posts)

    function likePost(id) {
        setPosts(prevPosts =>
          prevPosts.map(post => {
            const newLike = post.id === id ? post.like + 1 : post.like
            return { ...post, like: newLike }
          })
        )
    }
    function dislikePost(id) {
        setPosts(prevPosts =>
          prevPosts.map(post => {
            const newDislike = post.id === id ? post.dislike + 1 : post.dislike
            return { ...post, dislike: newDislike }
          })
        )
    }
        // i will work on this tomorrow 29.03.2023
//    function handleComment(e, id){
//         setPosts((prevPosts)=> prevPosts.map((post)=> {

//         })
//    }
    
    
    const [comment, setComment]= React.useState('')
    const [comments, setComments]= React.useState([])
    const [addComment, setAddComment]= React.useState(false)

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
            {
                posts.filter((post) => {
                    if(search === ''){
                        return post
                    }else if (
                        post.name.toLowerCase().includes(search.toLowerCase())||
                        post.title.toLowerCase().includes(search.toLowerCase())
                        ){
                        return post
                    }
                }).map((item)=>{
                    const {id, name, title,image,like, dislike} = item
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
                            <div className='buttons'>
                                <button 
                                className='like' 
                                onClick={()=> likePost(id)}
                                key={id}
                                value={id}
                                >
                                    Like <span>{like}</span>
                                </button>
                                <button 
                                className='dislike' 
                                onClick={()=> {dislikePost(id)}}
                                key={id}
                                value={id}
                                >
                                Dislike <span>{dislike}</span>
                                </button>
                                <button>Follow +</button>
                                <button onClick={handleAddComment}>{addComment? 'Close Comments': 'Add Comments'}</button>
                            </div>
                        </div>
                    )
                })
            }
            
             
        </div>
    )
}

export default Info