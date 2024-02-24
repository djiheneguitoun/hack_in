import React from "react";
import { useNavigate } from "react-router-dom";
import LogoNav from '../Img/LogoNav.svg';

function NavDoctor() {

    const navigate = useNavigate();
     
    const handleCalendar = () => {
        navigate('/doctor/calendar');
    }
    
    const handleProfile = () => {
        navigate('/doctor/profile');
    }
    
    const handleAppointement = () => {
        navigate('/doctor');
    }
    
    const handleLogout = () => {
        navigate('/');
    }
    
    return (
        <div className="flex flex-row items-center justify-between px-16 py-6 lg:px-16 md:px-16 sm:px-16 font-[StemRegular]">
            {/* <div className="text-green"> Logo </div> */}
            <img src={LogoNav} alt="LogoNav" className="w-[10%]" />
            <div className="flex flex-row items-center justify-between space-x-10 font-[StemRegular]">
                <span className="z-50 cursor-pointer" onClick={handleAppointement}> Appointment </span>
                <span className="z-50 cursor-pointer" onClick={handleCalendar}> Calendar </span>
                <span className="z-50 cursor-pointer" onClick={handleProfile}> Pofile </span>
                <button className="px-5 py-2 text-white bg-blueLight bg-opacity-17 font-[Stem-Medium]" onClick={handleLogout}> Log out </button>
            </div>
        </div>
    );
}

export default NavDoctor