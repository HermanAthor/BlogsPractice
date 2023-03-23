import React from 'react'
import "./friends.css";
import {data} from "./friendsData"

function Friends() {
  return (
    <>
        <div className='friends-container'>
            <p className='heading'>Friends</p>
            <div className='friends-list'>
                {
                    data.map((people) => {
                        console.log(people);
                        const {id,proff, imgg, name} = people;
                        return(
                            <div className='boxer' key={id}>
                                <div className='icon'>
                                    <img src={imgg} alt={name}/>
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