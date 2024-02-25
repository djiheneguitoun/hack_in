import React from "react";

function DocPartRight() {
    return (
        <div className="px-16 lg:w-[55%] py-10 font-[StemRegular] md:w-[55%] sm:w-[80%] w-[100%] mx-auto">
            <div className="w-[100%] mt-2">
                <span>CCP Number</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2" placeholder="144676898079888888978">

                </input>
            </div>
            <div className="w-[100%] mt-2">
                <span>Phone Number</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2" type="Email"placeholder="+213 687138523" >
                </input>
            </div>
            <div className="w-[100%] mt-2">
                <span>Description</span>
                <textarea className="w-[100%] bg-LightGreen p-4 rounded-md mt-2"
                placeholder="All the sessions are with a fix price with 2500 da/seesion">

                </textarea>
            </div>
            <div className="w-[100%] bg-LightGreen p-4 rounded-md mt-2 text-center font-bold text-2xl text-blue">
                Save
            </div>

        </div>
    )
}

export default DocPartRight