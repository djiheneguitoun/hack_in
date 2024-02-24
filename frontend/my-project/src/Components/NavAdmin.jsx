import React from "react";
import LogoNav from '../Img/LogoNav.svg';
import { useNavigate } from "react-router-dom";

function NavAdmin() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-row items-start justify-between px-6 py-6 lg:px-16 md:px-16 sm:px-16 font-[StemRegular]">
            {/* <div className="text-green"> Logo </div> */}
            <img src={LogoNav} alt="LogoNav" className="w-[10%]" />
            <button className="px-5 py-2 text-white bg-blueLight bg-opacity-17 font-[Stem-Medium]" onClick={handleLogout}> Log out </button>
        </div>
    );
}

export default NavAdmin