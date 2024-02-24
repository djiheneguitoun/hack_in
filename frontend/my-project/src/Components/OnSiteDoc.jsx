import React from "react";
import PatientOnSite from "./PatientOnSite";

function OnSiteDoc({doctors}) {

    const generatedoctors = () => {
        return doctors.map((doctor, index) => (
            <div key={index}>
                <PatientOnSite name={doctor.name} date={doctor.date} hour1={doctor.hour1} hour2={doctor.hour2}                    
                />
            </div>
        ));
    };

    return (
        <div className="w-[80%] p-4 font-[StemRegular]">
            <span className="mb-6 text-x-[40px] text-blue font-bold"> Onsite Sessions </span>
            <div className="py-2 mt-4 bg-gray bg-opacity-60 rounded-xl">
                <div className="flex flex-row items-center justify-between py-2 space-x-10 text-x[32px] text-blue font-bold px-16">
                    <span>Name </span>
                    <span>Date</span>
                    <span>Starting hour</span>
                    <span>Ending hour</span>
                </div>
                {generatedoctors()}
                    
            </div>
   
        </div>
    );
}

export default OnSiteDoc