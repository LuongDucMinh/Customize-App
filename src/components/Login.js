import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

import { useState } from 'react';

const Login = () => {

const [email,setEmail]= useState("");
const [password,setPassword]=useState("");
const [isShowPassword, setIsShowPassword]=useState(false)
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
      
        <i className={isShowPassword=== true?"fa-solid fa-eye"  :"fa-solid fa-eye-slash"}
        onClick={()=>{setIsShowPassword(!isShowPassword)}} >
       
        </i>
        
      
        </div>
       
        <button className={email && password ?  "active" :"" }
        disabled={email && password ? false:true}>Login</button>
        <div className='back'>
        <i className="fa-solid fa-angles-left">1</i>
        Go Back</div>
    </div>
  )
}

export default Login