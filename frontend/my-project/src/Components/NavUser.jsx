import React from "react";

function NavUser() {

    return (
        <div className="flex flex-row items-center justify-between px-16 pt-6 lg:px-16 md:px-16 sm:px-16">
            <div className="text-green"> Logo </div>
            <div className="flex flex-row items-center justify-between space-x-10">
                <span className="z-50 cursor-pointer"> Home </span>
                <span className="z-50 cursor-pointer"> Doctors </span>
                <span className="z-50 cursor-pointer"> Appointment </span>
                <span className="z-50 cursor-pointer"> Experiences </span>
                <span className="z-50 cursor-pointer"> Pofile </span>
                <button className="px-5 py-2 text-white bg-blueLight bg-opacity-17"> Log out </button>
            </div>
        </div>
    );
}

export default NavUser