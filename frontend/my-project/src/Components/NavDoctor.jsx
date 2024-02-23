import React from "react";

function NavDoctor() {

    return (
        <div className="flex flex-row items-center justify-between px-16 py-6 lg:px-16 md:px-16 sm:px-16">
            <div className="text-green"> Logo </div>
            <div className="flex flex-row items-center justify-between space-x-10">
                <span className="z-50 cursor-pointer"> Appointment </span>
                <span className="z-50 cursor-pointer"> Calendar </span>
                <span className="z-50 cursor-pointer"> Pofile </span>
            </div>
        </div>
    );
}

export default NavDoctor