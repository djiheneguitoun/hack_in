import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoNav from '../Img/LogoNav.svg';

function NavDoctor() {
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleCalendar = () => {
        navigate('/doctor/calendar');
    }

    const handleProfile = () => {
        navigate('/doctor/profile');
    }

    const handleAppointment = () => {
        navigate('/doctor');
    }

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-row items-center justify-between px-10 py-6 lg:px-16 md:px-16 sm:px-10 font-[StemRegular]">
            <img src={LogoNav} alt="LogoNav" className="w-36" />
            <div className="lg:flex lg:flex-row items-center justify-between space-x-10 font-[StemRegular] md:flex md:flex-row sm:flex sm:flex-row hidden">
                <span className={`z-50 cursor-pointer ${location.pathname === "/doctor" ? 'text-red' : 'text-blue'}`} onClick={handleAppointment}> Appointment </span>
                <span className={`z-50 cursor-pointer ${location.pathname === "/doctor/calendar" ? 'text-red' : 'text-blue'}`} onClick={handleCalendar}> Calendar </span>
                <span className={`z-50 px-4 cursor-pointer ${location.pathname === "/doctor/profile" ? 'text-red' : 'text-blue'}`} onClick={handleProfile}> Profile </span>
                <button className="px-5 py-2 text-white bg-blueLight bg-opacity-17 font-[Stem-Medium]" onClick={handleLogout}> Log out </button>
            </div>

            <div className="relative flex flex-col items-end lg:hidden md:hidden sm:hidden" onClick={handleClick}>
                <div className="z-50 flex flex-col cursor-pointer lg:hidden sm:hidden md:hidden" onClick={handleClick}>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                    <span className="w-8 h-1 mb-1 bg-blue"></span>
                </div>
                {show ? (
                    <div className="absolute z-40 flex flex-col items-start justify-center w-auto py-10 space-y-4 transition bg-white duration-400 md:hidden lg:hidden sm:hidden">
                        <button className="w-32 px-6 py-2 text-white bg-blue" onClick={handleLogout}>Logout</button>
                        <span onClick={handleAppointment} className={`px-4 ${location.pathname === "/doctor" ? 'text-red' : 'text-blue'}`}>Appointment</span>
                        <span onClick={handleCalendar} className={`px-4 ${location.pathname === "/doctor/calendar" ? 'text-red' : 'text-blue'}`}>Calendar</span>
                        <span onClick={handleProfile} className={`px-4 ${location.pathname === "/doctor/profile" ? 'text-red' : 'text-blue'}`}>Profile</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default NavDoctor;
