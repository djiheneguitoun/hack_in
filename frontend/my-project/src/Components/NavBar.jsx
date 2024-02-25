import React, { useState } from "react";
import LogoNav from '../Img/LogoNav.svg';
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const location = useLocation();

    const [show, setShow] = useState(false);
    const [loginClicked, setLoginClicked] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleLogin = () => {
        navigate('/login');
        setLoginClicked(true); // Met à jour l'état pour indiquer que "Log In" a été cliqué
    }

    const handleSignUp = () => {
        navigate2('/signup');
    }

    return (
        <div className="flex flex-row items-center justify-between px-6 py-6 lg:px-16 md:px-16 sm:px-16 font-[StemRegular]">
            <img src={LogoNav} alt="LogoNav" className="w-36" />
            <div className="hidden space-x-5 lg:items-center lg:flex-row lg:flex md:flex md:flex-row sm:flex sm:flex-row md:items-center sm:items-center">
                <span className={`cursor-pointer text-xl ${location === '/login'? 'text-red' : 'text-blue'}`} onClick={handleLogin}> Log In </span>
                <button className="px-4 py-2 text-white bg-blue font-[Stem-Medium] cursor-pointer" onClick={handleSignUp}> Sign Up </button>
            </div>

            <div className="relative flex flex-col items-end lg:hidden md:hidden sm:hidden" onClick={handleClick}>
                <div className="z-50 flex flex-col cursor-pointer lg:hidden sm:hidden md:hidden" onClick={handleClick}>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                </div>
                {show ? (
                    <div className="absolute z-40 flex flex-col items-start justify-center w-auto py-10 space-y-4 transition bg-white duration-400 md:hidden lg:hidden sm:hidden">
                        <button className="w-32 px-6 py-2 text-white bg-blue" onClick={handleSignUp}>Sign Up</button>
                        <span onClick={handleLogin} className={`px-4 ${loginClicked ? 'text-right' : ''}`}>Log In</span>
                    </div>) : null}
            </div>
        </div>
    );
}

export default NavBar;
