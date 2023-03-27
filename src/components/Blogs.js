import React from 'react'
import BlogsData from '../blogsData'

function Blogs() {
    const blogsStyles = {
        backgroundColor: 'red',
        display: 'flex',
        height:'300px',
        width: '100%',
        marginTop: '20px',
        borderRadius: '50px',
        justifyContent: 'center'

    }
    const blogsContainerStyles = {
        display: 'flex',
        overflow: 'scroll',
        flexWrap: 'nowrap',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center'
    }
    const MainBlogsContainer = {
        // backgroundColor: '#121212',
        // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // /* border: 1px solid red; */
        // width: '50%',
        // marginLeft: '20%',
        // marginTop:'100px'
    }
  return (
    <div style={MainBlogsContainer}>       
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
  )
}

export default Blogs