import React from "react";
import { useState } from "react";
import NavBar from "../Components/NavBar";
import Logo from '../Img/logo.svg';
import { useNavigate } from "react-router-dom";


function Acceuil() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/doctor');
    }

    return (
        <div className="BackAcceuil font-[StemRegular] " loading="lazy">
            <NavBar />

                <div className="flex flex-col items-center lg:items-start md:items-start sm:items-start">
                    
                    <div className="flex flex-col lg:w-[50%] md:w-[60%] sm:[70%] w-[80%] items-start lg:px-16 py-6 lg:space-y-10 justify-center md:px-16 sm:px-16 md:space-y-10 sm:space-y-10 space-y-6">
                        <img src={Logo} alt="logo" className="w-56" loading="lazy"/>
                        <p className="text-justify font-[Stem-Medium] lg:text-xl md:text-xl">
                            Discover a sanctuary for mental well-being at [Your Website Name]. Whether you seek support online through secure video sessions or prefer onsite counseling, our experienced professionals are here for you. Enjoy the flexibility to choose what suits you best. Your journey to better mental health begins here.
                        </p>
                        <button className="px-4 py-2 text-white cursor-pointer w-44 bg-blue font-[Stem-Medium] " onClick={handleLogin}> Get started </button>
                    </div>
                </div>

        </div>
    );
}

export default Acceuil