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
    function commentOnPOst(id, e){
        setPosts((prevPosts)=> 
            prevPosts.map((post)=>
                post.id === id? {...post, comment: e.target.value }: post
            ))
    }

    function handleOnClick(id){
        setPosts((prevPosts)=>
            prevPosts.map((post)=> 
                post.id === id? {...post, comments:[...post.comments, post.comment], comment:'',}:post
            )
        )
    }
    function handleAddComment(id){
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, addComment: !post.addComment } : post
          )
        )
    }
    function handleFollow(id){
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, isFollow: !post.isFollow } : post
          )
        )
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
                    const {id, name, title,image,like, dislike,comment,comments,addComment, isFollow} = item
                    console.log(comments)
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
                                            <div className='comment-text' key={index} id={index}>
                                                {text}
                                            </div>))
                                        } 
                                    </div> 
                                
                                    <div className='comment-area'>
                                        <textarea 
                                        name="comment" 
                                        id={comment} 
                                        cols="2" 
                                        rows="2"
                                        onChange={(e)=>{commentOnPOst(id,e)}}
                                        value={comment}
                                        >
                                        </textarea>
                                        <button onClick={()=>{handleOnClick(id)}}> Comment</button>
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
                                <button onClick={()=>{handleFollow(id)}}>{isFollow? "Followed" : "Follow +"}</button>
                                <button onClick={()=>{handleAddComment(id)}}>{addComment? 'Close Comments': 'Add Comments'}</button>
                            </div>
                        </div>
                    )
                })
            }
            
             
        </div>
    )
}

export default Info