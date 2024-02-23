import React from "react";

function NavAdmin() {

    return (
        <div className="flex flex-row items-start justify-between px-6 py-6 lg:px-16 md:px-16 sm:px-16">
            <div className="text-green"> Logo </div>
            <span className="z-50 cursor-pointer"> Logout </span>  
        </div>
    );
}

export default NavAdmin