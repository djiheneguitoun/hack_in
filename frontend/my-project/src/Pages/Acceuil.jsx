import React from "react";
import { useState } from "react";
import NavBar from "../Components/NavBar";


function Acceuil() {

    return (
        <div className="BackAcceuil">
            <NavBar />

                <div className="flex flex-col items-center lg:items-start md:items-start sm:items-start">
                    
                    <div className="flex flex-col lg:w-[50%] md:w-[60%] sm:[70%] w-[80%] items-start lg:px-16 py-6 lg:space-y-10 justify-center md:px-16 sm:px-16 md:space-y-10 sm:space-y-10 space-y-6">
                        <span className="text-4xl font-bold text-blue"> App Name </span>
                        <p className="text-justify">
                            Discover a sanctuary for mental well-being at [Your Website Name]. Whether you seek support online through secure video sessions or prefer onsite counseling, our experienced professionals are here for you. Enjoy the flexibility to choose what suits you best. Your journey to better mental health begins here.
                        </p>
                        <button className="px-4 py-2 text-white cursor-pointer w-44 bg-blue"> Get started </button>
                    </div>
                </div>

        </div>
    );
}

export default Acceuil