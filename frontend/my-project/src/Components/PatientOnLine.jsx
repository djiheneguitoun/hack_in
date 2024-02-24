import React from "react";

function PatientOnLine({name, date, hour1, hour2}) {

    return (
        <div className="flex flex-row items-center justify-between px-16 py-2 space-x-10 font-[StemRegular]">
            <span className="cursor-pointer"> {name} </span>
            <span className="cursor-pointer"> {date} </span>
            <span className="cursor-pointer"> {hour1} </span>
            <span className="cursor-pointer"> {hour2} </span>
            <button className="px-6 py-1 text-white bg-blueLight">Get</button>
        </div>
    );
}

export default PatientOnLine