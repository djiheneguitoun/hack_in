import React from "react";
import { useState } from "react";


function ReviewDown() {

    return (
        <div className="px-16 w-[50%] pb-10">
  
            <div className="w-[100%]">
                <span>Select session type</span>
                <div className="flex flex-row justify-between mt-2">
                    <div className="px-6 py-2 text-white bg-blue w-[35%] rounded">Onsite</div>
                    <div className="px-6 py-2 border text-blue w-[35%] rounded">Online</div>
                </div>
            </div>
        </div>
    )
}

export default ReviewDown