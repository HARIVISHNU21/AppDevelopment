import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login({ username: formdata.username }));
    const logindetails={username,password}
      await axios.post("http://localhost:8080/postUserLogin",logindetails)

    navigate('/');
  };

  return (
    <div className='auth-container'>
      <div className='auth-wrapper'>
        <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
          <h1 className='auth-heading'>Login Form</h1>
          <input
            type="text"
            name="username"
            id="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder='username'
            className='auth-field'
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder='password'
            className='auth-field'
            required
          />

          <button type='submit' className='auth-btn app-x-shadow'>Login</button>
        </form>
        <Link to='/Register' className='auth-links'>Register</Link>
      </div>
    </div>
  );
}

export default Login;
