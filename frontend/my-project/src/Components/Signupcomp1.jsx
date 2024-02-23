import React from 'react'
import Input from './Input'
import { useState } from 'react';
import Inputptt from './Inputptt';
//im

const Signupcomp = () =>{ 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sexe, setSexe] = useState('');
  const [age, setAge] = useState('');

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

  return( 
    <div className='login w-100vh flex flex-col items-end'>
        <div className='space-y-6 p-16'>
            <p className='lg:w-[450px]  mx-auto text-left w-full text-[#040054] sm:text-[50px] text-[100px] font-[Stem-Bold] '>
             Sign UP
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
                <button className='border-blue 
           bg-transparent border-2 sm:w-[25%] lg:w-[30%] px-4 h-[7%] sm:h-[5%] text-white  outline-none sm:text-xl  box-border
          focus:border-[2px]
          focus:text-blue
          focus:border-blue placeholder:text-blue rounded-[8px] mx-auto placeholder- sm:box-content font-medium font-[Stem-Medium]'>
                    <p>Docteur</p>
                </button >
                <button lassName='border-blue 
           bg-transparent border-2 sm:w-[25%] lg:w-[30%] px-4 h-[7%] sm:h-[5%] text-white  outline-none sm:text-xl  box-border
          focus:border-[2px]
          focus:text-blue
          focus:border-blue placeholder:text-blue rounded-[8px] mx-auto placeholder- sm:box-content font-medium font-[Stem-Medium]'>
                    <p>Patient</p>
                <button/>
            </div>
            <button className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-blue  rounded-[8px] flex justify-center md:w-[300px] mx-auto items-center
          text-white text-[23px] font-medium font-[Stem-Medium]
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content"
           >
         Next
         </button>
      </div>
        </div>
  )}

export default Signupcomp