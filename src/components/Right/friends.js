import React from 'react'
import "./friends.css";
import {data} from "./friendsData"
//import { Avatar } from '@mui/material';

function Friends() {
  return (
    <>
        <div className='friends-container'>
            <h1 className='heading'>Friends</h1>
            <div className='friends-list'>
                {
                    data.map((people) => {
                        console.log(people);
                        const {id,proff, imgg, name, isActive} = people;
                        return(
                            <div className='boxer' key={id}>
                                <div className='icon'>
                                    <img src={imgg} alt={name}/>
                                    <div className={ isActive ? 'green-div' : 'not-green'}></div>
                                    {/* <Avatar 
                                        src={imgg}
                                        alt={name}
                                        sx={{ width: 100, height: 100 }}
                                    /> */}
                                </div>
                                <div className='details'>
                                    <h4>{name}</h4>
                                    <p>{proff}</p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Friends