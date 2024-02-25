import React from "react";
import PatientOnLine from "./PatientOnLine";

function OnLine({ patients }) {

    const generatePatients = () => {
        return patients.map((patient, index) => (
            <div key={index}>
                <PatientOnLine name={patient.name} date={patient.date} hour1={patient.hour1} hour2={patient.hour2}
                />
            </div>
        ));
    };

    return (
        <div className="flex flex-col w-[80%] font-[StemRegular]">
            <span className="my-4 text-xl font-bold text-blue"> Online Sessions </span>
            <div className="bg-gray bg-opacity-60 rounded-xl">
                <div className="flex flex-row items-center justify-between px-16 py-4 space-x-10 text-x[32px] text-blue font-bold">
                    <span>Name </span>
                    <span>Date</span>
                    <span>Starting hour</span>
                    <span>Ending hour</span>
                    <span>Link</span>
                </div>

                <div className="max-h-[22vh] overflow-y-auto">
                    {generatePatients()}
                </div>
            </div>

        </div>
    );
}

export default OnLine