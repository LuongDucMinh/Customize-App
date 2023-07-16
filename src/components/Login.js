import React from 'react'
import {BsEyeSlashFill} from 'react-icons/bs';
import {IoEyeSharp} from 'react-icons/io5'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { loginApi } from '../services/UserService';
const Login = () => {

const [email,setEmail]= useState("");
const [password,setPassword]=useState("");
const [isShowPassword, setIsShowPassword]=useState(false);


const handleLogin = async () => {
  if(!email || !password){
toast.error('Email/Password is require');
return
  }

  let res= await loginApi( 'eve.holt@reqres.in',password);
if(res && res.token) {
  localStorage.setItem("token", res.token)
}
  

}

  return (
    <div className='login-container col-12 col-sm-4'>
        <div className=' title'>Login</div>
        <div className='text'>Email or UserName </div>

        <div className='input-user'>
        <input type='text' placeholder='Email or UserName...' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input type={isShowPassword===true ? "text":'password'} placeholder='Password'
               value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
       
        />
      
      
      <i  onClick={()=>{setIsShowPassword(!isShowPassword)}} >
      {isShowPassword=== true ? <IoEyeSharp/> : <BsEyeSlashFill/>}
       
      </i>
       
        
      
        </div>
       
        <button className={email && password ?  "active" :"" }
        disabled={email && password ? false:true}
        onClick={()=>handleLogin()}
        >Login</button>
        <div className='back'>
        <i className="fa-solid fa-angles-left">1</i>
        Go Back</div>
    </div>
  )
}

export default Login