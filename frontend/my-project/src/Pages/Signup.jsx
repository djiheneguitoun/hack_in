import React, {useState} from 'react'

import Signupcomp from '../Components/Signupcomp';

const Signup = () => {
    

  return (
    <div className='login w-100vh flex flex-col items-end font-[StemRegular]'>
        <div className='p-16 space-y-6'>
            <p className='lg:w-[450px]  mx-auto text-left w-full text-[#040054] sm:text-[50px] text-[100px] font-bold font-[Stem-Bold] '>
                Sign Up
            </p>
        <Signupcomp/>
        </div>
    </div>
  )
}

export default Signup