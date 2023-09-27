import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import "./Login.css"


function Login() {
  const navigate = useNavigate();
    const[username,setUsername]=useState(" ");
    const[password,setPassword]=useState(" ");
    const [formdata, setFormdata] = useState({
        username: '',
        password: ''
      })
      const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
      }
  const submitHandler = (e) => {
     e.preventDefault();
     
    navigate('/')
  }
  return (
    <>
    <div className='login-container'>
      <div className='login-form'>
        <form className='login-page' onSubmit={submitHandler}>
          <h1 className='login-h1'>Login Form</h1>
          <input type="text" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
          <input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />

          <button type='submit' className='auth-btn app-x-shadow'> Login </button>
        </form>
          <Link to='/Register' className='auth-links'>Register</Link>
      </div>
    </div>
  </>
)
}

export default Login