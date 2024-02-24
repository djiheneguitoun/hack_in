import React from 'react'
import '../index.css'
import Input from '../Components/Input';

const Signup = () => {
    const handleSetEmail = (value) => {
        console.log(email)
        setEmail(value);
      };
    const handleSetPassword=(value)=>
    {
      setPassword(value);
      console.log(password)
    };
   
    const handleSetUserName=(value)=>
    {
        setUserName(value);
        console.log(UserName);
      };


  return (
    <div className='login w-100vh flex flex-col items-end'>
        <div className='space-y-6 p-16'>
            <p className='lg:w-[450px]  mx-auto text-left w-full text-[#040054] sm:text-[50px] text-[100px] font-[Stem-Bold] '>
                 Sign UP
            </p>
            <Input 
             setValue={handleSetUserName}
             placeholder="UserName"
             name="UserName"
            />
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
           <button className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-blue  rounded-[10px] flex justify-center md:w-[300px] mx-auto items-center
          text-white text-[23px] font-medium font-[Stem-Medium]
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content" >
            <p>
           Sign Up
            </p> 
         </button>  
         
         </div>
    </div>
  )
}

export default Signup