import React, { useState} from 'react'
import './Register.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


            
function Signup() {
  const nav=useNavigate("");
  const[fullname,setName]=useState("");
  const[mobile,setMobile]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword] = useState("");
  const authenticate=async (e)=>{
    e.preventDefault();
    try{
    await axios.post("http://localhost:8080/postUserRegister",{fullname,mobile,email,password})
  nav("/loginbtn")}
  catch(error)
  {
    console.log(error);
  }
  }
  return (
    <> 
    <div class="login-page2">
    <div class="login2">
      <center><h2>Registeration</h2></center>
      <form class="form-login2" type="submit" onSubmit={authenticate}>

        <label for="name">Full Name</label>
        <div class="input-email">
          <AccountCircleIcon sx={{color:blue[900]}} fontSize='medium' color='success'  /> 
          <input type="text" placeholder="   Enter your Name" value={fullname} onChange={(e)=>setName(e.target.value)} required />
        </div><br/>

        <label>Mobile</label>
        <div class="input-email">
          <PhoneAndroidIcon sx={{color:blue[900]}} fontSize='medium' color='success' /> 
          <input type="tel" pattern="[6789][0-9]{9}" minLength={10} maxLength={10} value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="   Enter your Number" required/>
        </div><br/>

        <label for="email">E-mail</label>
        <div class="input-email">
          <EmailIcon sx={{color:blue[900]}} fontSize='medium' color='success'/> 
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="   Enter your E-mail" required/>
        </div><br/>
       
        <label for="password">Password</label>
        <div class="input-password">
        <LockIcon sx={{color:blue[900]}} fontSize='medium' color='success'/>
          <input type="password" minLength={8} maxLength={16} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="   Enter your Password" required />
        </div>
        <button type="submit" > Register</button>


        <Link to="/" style={{textDecoration:"none"}}><h5>Already Have An Account?</h5></Link>
      </form> 
    </div>
  </div>
    </>
  )
}

export default Signup