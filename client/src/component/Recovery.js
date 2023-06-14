// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
// import {useFormik} from 'formik'
// import { PasswordValidate } from '../helper/validate'


export default function Recovery() {
        // const [username,setUsername] = useState("");
   

  return (
    <div className="container mx-auto">
        <Toaster position='top-center'  reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center">
            <div className={`${style.glass} `} >
                
                    <div className="title flex flex-col items-center ">
                        <h4 className='text-5xl font-bold'>Recovery</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter OTP to Recover Password
                        </span>
                    </div>
                    <form className='py-1' >
                        <div className="profile flex justify-center py-4"> 
                            <img src={avatar} className={style.profile_img} alt="avatar" />
                        </div>
                        <div className=" textbox flex flex-col items-center gap-6">
                          <div className="input text-center">
                            <span className='text-sm text-gray-500 text-left  '>Enter 6 digit OTP sent to Your Email </span>
                            <input type="password" className={`${style.textbox}`} placeholder='OTP' />
                          </div>
                            <button type='submit'  className={style.btn}>Sign In</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Can't Get OTP <button className='text-red-500'>Resend</button></span>
                        </div>
                    </form>
                
            </div>
            
        </div>
        
    </div>
  )
}
