import React from 'react'
//import { useState,useContext } from 'react';}
import '../index.css'
import Input from '../Components/Input';


export const Login = () => {
  const handleSetEmail = (value) => {
    console.log(email)
    setEmail(value);
  };
  const handleSetPassword = (value) => {

    setPassword(value);
    console.log(password)
  }


  return (
    <div className='login w-100vh flex flex-col items-end font-[StemRegular]'>
      <div className='p-16 space-y-6'>
        <p className='lg:w-[450px]  mx-auto text-left w-full text-[#040054] sm:text-[50px] text-[100px] font-[Stem-Bold] '>
          Log In
        </p>
        <Input
          setValue={handleSetEmail}
          placeholder="Email"
          name="email"
        />

        <Input
          setValue={handleSetPassword}
          placeholder="Password"
          type="password"
          name="password"
        />
        <p className='lg:w-[450px] mx-auto text-center'>
          <button className="text-[#040054] hover:underline text-[24px] sm:text-xl  text-right font-medium font-[Stem-Medium] w-[100%] mr-0">
            Forgot password ?
          </button>
        </p>

        <button className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-blue  rounded-[10px] flex justify-center md:w-[300px] mx-auto items-center
          text-white text-[23px] font-medium font-[Stem-Medium]
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content" >
          <p>
            Log in
          </p>
        </button>
        <p className='text-blue lg:w-[450px] 
          mx-auto sm:text-xl text-[14px] text-center '>
          <p className='md:inline mr-3 font-medium font-[Stem-Medium]'>
            Don't have an account ?
          </p>
          <button className="text-blue sm:text-xl font-medium font-[Stem-Medium] text-[14px] text-right hover:underline ">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login