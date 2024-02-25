import React from "react";
import { useNavigate } from "react-router-dom";
import LogoNav from '../Img/LogoNav.svg';

function NavUser() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }
    const handleHome = () => {
        navigate('/');
    }
    const handleDoctors = () => {
        navigate('/user/doctors');
    }
    const handleAppointement= () => {
        navigate('/user/appointement');
    }

    const handleProfile = () => {
        navigate('/user/profile');
    }

    return (
        <div className="flex flex-row items-center justify-between px-16 pt-6 lg:px-16 md:px-16 sm:px-16 font-[StemRegular]">
            <img src={LogoNav} alt="LogoNav" className="w-[10%]"/>
            <div className="flex flex-row items-center justify-between space-x-10">
                <span className="z-50 cursor-pointer" onClick={handleHome}> Home </span>
                <span className="z-50 cursor-pointer" onClick={handleDoctors}> Doctors </span>
                <span className="z-50 cursor-pointer" onClick={handleAppointement}> Appointement </span>
                <span className="z-50 cursor-pointer"> Experiences </span>
                <span className="z-50 cursor-pointer" onClick={handleProfile}> Pofile </span>
                <button className="px-5 py-2 text-white bg-blueLight bg-opacity-17" onClick={handleLogout}> Log out </button>
            </div>
        </div>
    );
}

export default NavUser