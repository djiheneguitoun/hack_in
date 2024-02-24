import React from "react";
import Avis from '../Img/avis.svg';

function DoctorProfile2({ name, place, desc, ccp }) {

    return (
        <div className="flex flex-col items-center font-[StemRegular]">
            <div className="py-6 w-[90%]">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-4">
                        <span className="text-xl font-bold text-blue"> {name}</span>
                        <span> {place}</span>
                    </div>
                    <img src={Avis} alt="Avis" className="h-6" />
                </div>
                <div className="py-4 w-[100%]">
                    <span className="w-[100%]"> {desc}</span>
                </div>
                <div className="flex flex-col justify-end">
                    <span className="py-2 text-xl font-bold text-blue">CCP Account</span>
                    <span className="py-2 ">{ccp}</span>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfile2