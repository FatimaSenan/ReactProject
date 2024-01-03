import React from 'react'
import './SignUp.css'
import { FaUserAlt,FaLock } from "react-icons/fa";
import { Reveal } from 'react-reveal';


export const SignUp = () => {
  return (
   <Reveal>
    <div className='body'>
        <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUserAlt className='icon' />
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon' />
            </div>

            <div className='remember-box'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Dont't have an account?<a href='#'>Register</a></p>

            </div>

        </form>

    </div>
    </div>
    </Reveal>

  );
}
