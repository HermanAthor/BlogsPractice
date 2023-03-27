import React from 'react'
import BlogsData from '../blogsData'

function Blogs() {
    const blogsStyles = {
        backgroundColor: 'red',
        display: 'flex',
        overflow: 'scroll',
        height:'300px',
        width: '300px',
        marginTop: '20px',
        borderRadius: '50px',
        justifyContent: 'center'

    }
    const blogsContainerStyles = {
        display: 'flex',
        overflow: 'scroll'
    }
  return (
    <div>
        <div>
                <h1>Blogs</h1>
                <div style={blogsContainerStyles}>
                    {BlogsData.map((blog, index)=>{
                        const {name, image, title, details}= blog
                        return(
                            <div style={blogsStyles} key={index}>
                                <img src={image} alt={name}/>
                                <h3>{name}</h3>
                                <h4>{title}</h4>
                                <p>{details}</p>

                            </div>
                        )
                    })}
                </div>

            </div> 
    </div>
  )
}

export default Blogs