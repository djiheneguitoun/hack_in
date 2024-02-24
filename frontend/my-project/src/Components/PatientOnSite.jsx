import React from "react";

function PatientOnSite({name, date, hour1, hour2}) {

    return (
        <div className="flex flex-row items-center justify-between px-16 py-2 space-x-10 font-[StemRegular]">
            <span className="cursor-pointer"> {name} </span>
            <span className="cursor-pointer"> {date} </span>
            <span className="cursor-pointer"> {hour1} </span>
            <span className="cursor-pointer"> {hour2} </span>
        </div>
    );
}

export default PatientOnSite