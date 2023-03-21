import React from 'react'
import axios from 'axios'
import "./contactCard.css"
import {faEnvelope} from "react-icons/fc"


function ContactCard() {
    const[data, setData] = React.useState([])
    const[loading, setLoading]= React.useState(true)
    React.useEffect(() => {
        axios({
          method: 'GET',
          url: 'https://randomuser.me/api'
        })
        .then((res) => {
          console.log(res.data.results)
          setData(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        });
      }, []);
    
  return (
    <div>
        {loading && <div>Loading....</div> }
        {data.map((user)=> <div className='contact-card'>
            <img src={user.picture.large} alt="pic"/>
            <h2>
                <span>{user.name.first}</span>
                <span>{user.name.last}</span>
            </h2>
            <h4>
                <span> 
                  <faEnvelope/>
                  {user.email} </span>
                <span> phone number </span>
            </h4>
        </div>)}
    </div>
  )
}

export default ContactCard



