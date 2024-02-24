import React from "react";

function DocPartLeft() {
    return (
        <div className="px-16 w-[50%] py-10">
            <div className="w-[100%] mt-2">
                <span>Username</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2">

                </input>
            </div>
            <div className="w-[100%] mt-2">
                <span>Email</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2" type="Email" >
                </input>
            </div>
            <div className="w-[100%] mt-2">
                <span>New password</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2" type="Password">

                </input>
            </div>
            <div className="w-[100%] mt-2">
                <span>Confirm Password</span>
                <input className="w-[100%] bg-LightGreen p-4 rounded-md mt-2 "type="Password">

                </input>
            </div>

        </div>
    )
}

export default DocPartLeft