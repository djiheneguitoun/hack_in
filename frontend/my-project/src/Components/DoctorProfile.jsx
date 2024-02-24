import React from "react";
import Avis from '../Img/avis.svg';

function DoctorProfile({ name, place, desc }) {

    return (
        <div className="flex flex-col items-center">
            <div className="py-6 bg-gray bg-opacity-87 w-[90%]">
                <div className="flex flex-row justify-between px-10 ">
                    <div className="flex flex-row items-center space-x-4">
                        <span className="text-2xl font-bold text-blue"> {name}</span>
                        <span> {place}</span>
                    </div>
                    <img src={Avis} alt="Avis" className="h-6" />
                </div>
                <div className="px-16 py-4 w-[100%]">
                    <span className="w-[100%]"> {desc}</span>
                </div>
                <div className="flex flex-row justify-end px-10 pt-6">
                    <button className="px-10 py-2 text-xl font-bold text-white bg-blue">Get more details</button>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfile