import React from "react";
import {useState} from "react";

function NavMobile() {

    return(
        <div className="z-10 flex flex-col items-center justify-center w-auto py-8 pl-8 space-y-4 transition bg-white duration-400 md:hidden lg:hidden sm:hidden">
        <button className="px-6 py-2 text-white cursor-pointer bg-blue">Sign Up</button>
        <span>Log In</span>
    </div>

    );
}

export default NavMobile