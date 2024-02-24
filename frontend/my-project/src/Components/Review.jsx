import React from "react";

function Review({titre}) {

    return (
        <div className="flex items-center justify-center px-6 py-6 cursor-pointer bg-gray opacity-80 font-[StemRegular]">
            <span className="rounded-[6px]"> {titre} </span>
        </div>
    );
}

export default Review