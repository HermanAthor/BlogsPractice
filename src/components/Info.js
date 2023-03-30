import React from 'react'
import "./info.css"



function Info({data, search}) {
            //#this code was used before we saved the posts to localStorege/ database
    // const [posts, setPosts] = React.useState(data)
    // console.log(posts)


            // #this GETs  the posts from  localStorage/database
    const [posts, setPosts] = React.useState(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
          return JSON.parse(storedPosts);
        } else {
          return data;
        }
    });
            //this sets/PUTs the posts to the localStorege || Database(thogh not yet created)
    React.useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);


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
                 post.id === id /*&& post.comment?.value?.length > 0*/ ? 
                {...post, comments:[...post.comments, post.comment], comment:''} : post
            )
        )
        setPosts((prevPosts) =>
           prevPosts.map((post) =>
             post.id === id ? { ...post, commented: !post.commented } : post
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
            <div className='home'>Home</div>
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
                    const {
                        id, 
                        name, 
                        title,
                        image,
                        like, 
                        dislike,
                        comment,
                        comments,
                        addComment, 
                        isFollow,
                        commented
                    } = item
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
                                        {commented && <textarea 
                                            name="comment" 
                                            id={comment} 
                                            cols="2" 
                                            rows="2"
                                            onChange={(e)=>{commentOnPOst(id,e)}}
                                            value={comment}
                                            >
                                            </textarea>
                                        }
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