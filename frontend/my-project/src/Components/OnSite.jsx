import React from "react";
import PatientOnSite from "./PatientOnSite";

function OnSite({ patients }) {

    const generatePatients = () => {
        return patients.map((patient, index) => (
            <div key={index}>
                <PatientOnSite name={patient.name} date={patient.date} hour1={patient.hour1} hour2={patient.hour2}
                />
            </div>
        ));
    };

    return (
        <div className="w-[80%] font-[StemRegular]">
            <span className="text-xl font-bold text-blue"> Onsite Sessions </span>
            <div className="mt-4 bg-gray bg-opacity-60 rounded-xl">
                <div className="flex flex-row items-center justify-between py-4 space-x-10 text-x[32px] text-blue font-bold px-16">
                    <span>Name </span>
                    <span>Date</span>
                    <span>Starting hour</span>
                    <span>Ending hour</span>
                </div>
                <div className="max-h-[22vh] overflow-y-auto">
                    {generatePatients()}
                </div>

            </div>

        </div>
    );
}

export default OnSite