import React from 'react'

import "./contactUs.css"
//import { Link } from 'react-router-dom'
//import data from '../Data'

import { useFormik } from 'formik'
import { TextField, Stack, Button } from '@mui/material'
import * as Yup from "yup"

function ContactUs() {
  const validations = Yup.object().shape({
    firstName: Yup.string()
      .min(4, "Input atleast more than 3 characters")
      .max(10, "We expected your name to be less than 10 characters")
      .required("We need your first name for the form to be submitted"),
    lastName: Yup.string()
      .min(3, "Should have more than 3 charaters")
      .max(10,"Should not have more than 10 charaters")
      .required("please provide your last name"),
    phoneNumber: Yup.string()
      .min(10,"Enter a valid number")
      .max(12,"Number is too long")
      .required("please provide your phone number"),
    email: Yup.string()
      .email("Enter email")
      .required("please provide s with your email"),
    message: Yup.string()
      .required('We need to know why you want to contact us')
      .max(50, "we only need about 50 characters")
  })
  const formik = useFormik({
    onSubmit: (values)=> alert(JSON.stringify(values)),
    validationSchema: validations,
    initialValues: {
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      joinMail: true,
      message:"",
    }
  })
  return (
    <Stack
      direction="column"
      
      sx={{margin:'0 auto',
       border: '1px solid black',
       display: 'flex',
       
      }}
    >
      <TextField
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.errors.firstName}
        id="firstName" 
        type='text' 
        label='First Name'
        onChange={formik.handleChange}
        name='firstName'
        value={formik.values.firstName}
      />
        <TextField
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
          id="lastName" 
          type='text' 
          label='Last Name'
          onChange={formik.handleChange}
          name='lastName'
          value={formik.values.lastname}
          required
          
        />
        <TextField
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
          id="email" 
          type='email' 
          label='Email'
          onChange={formik.handleChange}
          name='email'
          value={formik.values.email}
          required
        />
        <TextField
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.errors.phoneNumber}
          id="phoneNumber" 
          type='number' 
          label='Phone Number'
          onChange={formik.handleChange}
          name="phoneNumber"
          value={formik.values.phoneNumber}
        />
        <TextField
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.errors.message}
          id="message" 
          type='text' 
          label="message"
          onChange={formik.handleChange}
          name='message'
          value={formik.values.message}
        />
        <Button variant='filled' color='primary' type='submit' onClick={()=>formik.handleSubmit()}>Submit</Button>
      </Stack>

  
  // const [form,setForm] = React.useState({
  //   firstName:"",
  //   lastName:"",
  //   email:"",
  //   phoneNumber:"",
  //   joinMail: true,
  //   message:"",
  // })
  /*const [form,setForm] = React.useState(()=>{
    const storedForm = localStorage.getItem('ContactData')
    if(storedForm){
      return JSON.parse(storedForm)
    }else{
      return data
    }
  })
  React.useEffect(()=>{
    window.localStorage.setItem('ContactData', JSON.stringify(form))
  },[form])

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
  }*/
  
        /* <TextField
          id=""
          type='checkbox'
          onChange={handleChange}
          id='joinMail'
          checked={}
          name="joinMail"
        /> */
    
      

    
        
               /* <label htmlFor='joinMail'>Do you want to join our mail list?</label>
               Make sure to read our terms and condition here
              <span><Link to='terms-and-conditions'>Terms and Condition</Link></span>

              
              
              <button onClick={handleSubmit}>Submit</button> */

  )
}

export default ContactUs