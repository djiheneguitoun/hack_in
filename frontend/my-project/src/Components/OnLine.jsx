import React from "react";
import PatientOnLine from "./PatientOnLine";

function OnLine({patients}) {

    const generatePatients = () => {
        return patients.map((patient, index) => (
            <div key={index}>
                <PatientOnLine name={patient.name} date={patient.date} hour1={patient.hour1} hour2={patient.hour2}                    
                />
            </div>
        )); 
    };

    return (
        <div className="flex flex-col p-4 w-[80%]">
            <span className="mb-4 text-x-[40px] text-blue font-bold"> OnLine Sessions </span>
            <div className="py-2 bg-gray bg-opacity-60 rounded-xl">
                <div className="flex flex-row items-center justify-between px-16 py-2 space-x-10 text-x[32px] text-blue font-bold">
                    <span>Name </span>
                    <span>Date</span>
                    <span>Starting hour</span>
                    <span>Ending hour</span>
                    <span>Link</span>
                </div>
                    {generatePatients()}
            </div>
   
        </div>
    );
}

export default OnLine