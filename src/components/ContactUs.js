import React from 'react'

import "./contactUs.css"
import { Link } from 'react-router-dom'

function ContactUs() {
  const [form,setForm] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    joinMail: true,
    message:"",})
  function handleChange(event){
    const{name, value,type, checked } = event.target
    setForm((prevForm)=>{
      return{
        ...prevForm,
        [name]: type === 'checkbox'? checked : value
      }
    })
  }
  console.log(form)
  
  function handleSubmit(){
    const alertMessage = `We'll use this info to contact you`
    alert(
      `${alertMessage}
      ${form.firstName},
      ${form.lastName}
      ${form.email}
      ${form.message}
      ${form.phoneNumber}
      Joined mail list: ${form.joinMail}
    
    `)
  }
  return (
    <div className='contact-us-container'>
        <h1>CONTACT US</h1>
        <form className='form-container'>
          <input 
            type='text' 
            placeholder='First Name'
            onChange={handleChange}
            name='firstName'
            value={form.firstName}
            />
          <input 
            type='text' 
            placeholder='Last Name'
            onChange={handleChange}
            name='lastName'
            value={form.lastName}
            required
            />
          <input 
            type='email' 
            placeholder='Email'
            onChange={handleChange}
            name='email'
            value={form.email}
            required
            />
          <input 
            type='text' 
            placeholder='Phone Number'
            onChange={handleChange}
            name="phoneNumber"
            value={form.phoneNumber}
            />
          <input 
            type='text' 
            placeholder='Message'
            onChange={handleChange}
            name='message'
            value={form.message}
          />
          <div>
            <input
                type='checkbox'
                onChange={handleChange}
                id='joinMail'
                checked={form.joinMail}
                name="joinMail"
              />
              <label htmlFor='joinMail'>Do you want to join our mail list?</label>
          </div>
          <div className='infos'>
            <p>Make sure to read our terms and condition here</p>
            <span><Link to='terms-and-conditions'>Terms and Condition</Link></span>
          </div>
          
          
          <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs