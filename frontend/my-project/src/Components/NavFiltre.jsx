import React from "react";

function NavFiltre() {
    
    return (
        <div className="flex flex-row items-center justify-between px-16 cursor-pointer font-[StemRegular]">
            <span className="text-2xl font-bold text-blue"> Choose a doctor </span>
            <button className="px-8 py-2 font-bold text-white bg-blueLight">
                Filtre
            </button>
        </div>
    );
}

export default NavFiltre