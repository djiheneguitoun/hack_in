import React from "react";

function DeleteButton() {

    return (
        <div className="flex items-center justify-center px-6 py-6 cursor-pointer font-[StemRegular]">
            <span className="px-10 py-2 text-red bg-red rounded-[6px] bg-opacity-20 font-bold"> Delete </span>
        </div>
    );
}

export default DeleteButton