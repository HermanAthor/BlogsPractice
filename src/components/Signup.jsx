import React from 'react'
import { Stack, TextField } from '@mui/material'
import "./SignUp.css"

function Signup() {
  return (
    <div className='input--container'>
        <Stack direction='column' spacing={2}>
            <TextField
                label='name'
                variant='outlined'
                type='text'
                helperText="Enter your name"
            />
            <TextField
                label='number'
                type='number'
                required
                variant='outlined'
                helperText="Enter Your Phone Number"
            />
            <TextField
                label='password'
                type='password'
                required
                variant='outlined'
                helperText="Remember to keep it to your self"
            />
            <TextField
                label='email'
                variant='outlined'
                type='email'
                required
                helperText="Enter Your Email"

            />
            
        </Stack> 
    </div>
  )
}

export default Signup