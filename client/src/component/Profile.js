import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import style from '../styles/Username.module.css'
import extend from '../styles/Profile.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {  ProfileValidate} from '../helper/validate'
import convertToBase64 from '../helper/convert'


export default function Profile() {
        const [file,setFile] = useState("");
    const formik=useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            mobileno:'',
            email:'',
            address:""
        },
        validate:ProfileValidate,
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
        <div className="flex justify-center items-center ">
            <div className={`${style.glass} ${extend.glass}`} >
                
                    <div className="title flex flex-col items-center ">
                        <h4 className='text-5xl font-bold'>Profile</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            You Can Update the details Here.
                        </span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4"> 
                        <label htmlFor='profile'>
                            <img src={file || avatar} className={`${style.profile_img} ${extend.profile_img}`} alt="avatar" />
                        </label>
                        <input onChange={onUpload} type='file' id='profile' name='profile'></input>
                        </div>
                        <div className=" textbox flex flex-col items-center gap-4">
                          <div className="name flex w-3/4 gap-10">
                          <input type="text" {...formik.getFieldProps('firstname')}className={`${style.textbox2} ${extend.textbox}`} placeholder='FirstName' />
                          <input type="text" {...formik.getFieldProps('lastname')}className={`${style.textbox2} ${extend.textbox}`} placeholder='LastName' />
                          </div>

                          <div className="name flex w-3/4 gap-10">
                          <input type="number" {...formik.getFieldProps('mobileno')}className={`${style.textbox2} ${extend.textbox}`} placeholder='Mobile No' />
                          <input type="email" {...formik.getFieldProps('email')}className={`${style.textbox2} ${extend.textbox}`} placeholder='EMail' />
                          </div>

                            <input type="text" {...formik.getFieldProps('address')}className={`${style.textbox2} ${extend.textbox}`} placeholder='Address' />
                            <button type='submit'  className={style.btn}>Update</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Come Back Later? <Link className='text-red-500' to="/">Logout</Link></span>
                        </div>
                    </form>
                
            </div>
            
        </div>
        
    </div>
  )
}
