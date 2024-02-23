import React from 'react'
//import  { useState } from "react";
import '../index.css';
export const Inputptt = (props) => {

    
    
      const handleChange = (e) => {
        
        setVal(e.target.value);
        e.preventDefault();
        if (props.setValue) {
          props.setValue(e.target.value);
        }
      };
    
      return (
        <div>
         <input required
          onChange={handleChange}
          placeholder={props.placeholder}
          {...(props.type != null ? { type: props.type } : {})}
          
          
          className="border-blue opacity-50 
           bg-transparent border-2 sm:w-[25%] lg:w-[30%] px-4 h-[7%] sm:h-[5%] text-white  outline-none sm:text-xl  box-border
          focus:border-[2px]
          focus:text-blue
          focus:border-blue placeholder:text-blue rounded-[8px] mx-auto placeholder- sm:box-content font-medium font-[Stem-Medium]"
          />
        </div> 
      )
}

export default Inputptt