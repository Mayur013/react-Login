// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import avatar from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { ReserPasswordValidate } from '../helper/validate'


export default function Reset() {
        // const [username,setUsername] = useState("");
    const formik=useFormik({
        initialValues: {
            password:'',
            confirm_pwd:''
        },
        validate:ReserPasswordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values=>{
            console.log(values);
        }
    })

  return (
    <div className="container mx-auto">
        <Toaster position='top-center'  reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center">
            <div className={`${style.glass} `} >
                
                    <div className="title flex flex-col items-center ">
                        <h4 className='text-5xl font-bold'>Reset</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter New Password
                        </span>
                    </div>
                    <form className='py-20' onSubmit={formik.handleSubmit}>
                        
                        <div className=" textbox flex flex-col items-center gap-5">
                            <input type="password" {...formik.getFieldProps('password')}className={style.textbox2} placeholder='New Password' />
                            <input type="password" {...formik.getFieldProps('confirm_pwd')}className={style.textbox2} placeholder='Confirm Password' />
                            <button type='submit'  className={`${style.btn}`}>Reset</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Forgot Pasowrd? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
                        </div>
                    </form>
                
            </div>
            
        </div>
        
    </div>
  )
}
