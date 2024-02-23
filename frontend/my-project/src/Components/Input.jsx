import React from 'react'
//import  { useState } from "react";
import '../index.css';
export const Input = (props) => {

    
    
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
           bg-transparent border-2 sm:w-[300px] lg:w-[450px] px-4 h-[50px] sm:h-[60px] text-blue outline-none sm:text-xl w-[258.4px] box-border
          focus:border-[2px]
          focus:text-blue
          focus:border-blue placeholder:text-blue rounded-[10px] mx-auto placeholder- sm:box-content font-medium font-[Stem-Medium]"
          />
        </div> 
      )
}

export default Input