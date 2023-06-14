import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {  RegisterValidate } from '../helper/validate'
import convertToBase64 from '../helper/convert'


export default function Register() {
        const [file,setFile] = useState("");
    const formik=useFormik({
        initialValues: {
            email:'',
            username:'',
            password:''
        },
        validate:RegisterValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values=>{
          values=await Object.assign(values,{profile : file || ''});
            console.log(values);
        }
    })

    const onUpload= async e=>{
      const base64=await convertToBase64(e.target.files[0]);
      setFile(base64);
    }

  return (
    <div className="container mx-auto">
        <Toaster position='top-center'  reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center">
            <div className={`${style.glass} `} >
                
                    <div className="title flex flex-col items-center ">
                        <h4 className='text-5xl font-bold'>Register</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Happy To Join You!!
                        </span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4"> 
                        <label htmlFor='profile'>
                            <img src={file || avatar} className={style.profile_img} alt="avatar" />
                        </label>
                        <input onChange={onUpload} type='file' id='profile' name='profile'></input>
                        </div>
                        <div className=" textbox flex flex-col items-center gap-4">
                            <input type="email" {...formik.getFieldProps('email')}className={style.textbox2} placeholder='Email' />
                            <input type="username" {...formik.getFieldProps('username')}className={style.textbox2} placeholder='Username' />
                            <input type="password" {...formik.getFieldProps('password')}className={style.textbox2} placeholder='Password' />
                            <button type='submit'  className={style.btn}>Register</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Already Have An Account? <Link className='text-red-500' to="/">Log In</Link></span>
                        </div>
                    </form>
                
            </div>
            
        </div>
        
    </div>
  )
}
