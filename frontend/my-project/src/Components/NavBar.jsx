import React from "react";
import {useState} from "react";

function NavBar() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    
    return(
        <div className="flex flex-row items-start justify-between px-6 py-6 lg:px-16 md:px-16 sm:px-16">
            <div className="text-green"> Logo </div>
            <div className="hidden space-x-5 lg:items-center lg:flex-row lg:flex md:flex md:flex-row sm:flex sm:flex-row md:items-center sm:items-center">
                <span> Log In </span>
                <button className="px-4 py-2 text-white bg-blue"> Sign Up </button>
            </div>

            <div className="relative flex flex-col items-end lg:hidden md:hidden sm:hidden" onClick={handleClick}>
                <div className="z-50 flex flex-col cursor-pointer lg:hidden sm:hidden md:hidden"  onClick={handleClick}>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                </div>   
                {show ? (
                    <div className="absolute z-40 flex flex-col items-center justify-center w-auto py-10 pl-8 space-y-4 transition bg-white duration-400 md:hidden lg:hidden sm:hidden">
                        <button className="w-32 px-6 py-2 text-white bg-blue">Sign Up</button>
                        <span>Log In</span>
                    </div>) : null}  
            </div>
            
            
        </div>

    );
}

export default NavBar