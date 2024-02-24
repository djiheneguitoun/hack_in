import React from 'react'
import Input from './Input'
import { useState } from 'react';
import Inputptt from './Inputptt';
//import Signupco2 from './Signupco2';

const Signupcomp = () => {

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
      const handleSetPhoneNumber=(value)=>
    {
        setPhoneNumber(value);
        console.log(PhoneNumber);
      };
      const handleSetSexe=(value)=>
    {
        setSexe(value);
        console.log(Sexe);
      };
      handleSetAge=(value)=>
    {
        setAge(value);
        console.log(Age);
    };

      const [showDiv, setDiv] = useState(false);

      const handleDiv = () => {
          setDiv(!showDiv);
      };

  return (
    <div className='flex flex-col items-end font-[StemRegular]'>
        {!showDiv && <div className='p-16 space-y-6'>
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
           <button className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-blue  rounded-[8px] flex justify-center md:w-[300px] mx-auto items-center
          text-white text-[23px] font-medium font-[Stem-Medium]
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content"
          onClick={handleDiv} >
         Next
         </button> 
         </div>}
         {showDiv && <div className='p-16 space-y-6'>
            <p className='lg:w-[450px]  mx-auto text-left w-full text-[#040054] sm:text-[50px] text-[100px] font-bold font-[Stem-Bold] '>
                Sign Up
            </p>
            <Input 
             setValue={handleSetPhoneNumber}
             placeholder="PhoneNumber"
             name="PhoneNumber"
            />
            <div className='flex flex-row space-x-1'>
            <Inputptt setValue={handleSetSexe}
             placeholder="Sexe"
             name="Sexe"
            />
             <Inputptt 
             setValue={handleSetAge}
             placeholder="Age"
             name="Age"
            />
            </div>
            <div className='flex flex-row space-x-1'>
                <button className=''></button>

            </div>
            <button className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-blue  rounded-[8px] flex justify-center md:w-[300px] mx-auto items-center
          text-white text-[23px] font-medium font-[Stem-Medium]
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content"
            onClick={handleDiv} >
         Next
         </button>
        </div>}
    </div>

  )
}

export default Signupcomp