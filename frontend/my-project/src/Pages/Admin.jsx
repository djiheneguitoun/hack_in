import React from "react";
import { useState } from "react";
import Doctor from "../Components/Doctor";
import NavAdmin from "../Components/NavAdmin";
import PopUpEmail from "../Components/PopUpEmail";
import PopUpDelete from "../Components/PopUpDelete";

function Admin({ doctors }) {

    const [showPopUp, setShowPopUp] = useState(false);
    const [showPopUp2, setShowPopUp2] = useState(false);

    const handleSuccessClick = () => {
        setShowPopUp(!showPopUp);
    };

    const handleDelete = () => {
        setShowPopUp2(!showPopUp2);
    };

    const generateDoctors = () => {
        return doctors.map((doctor, index) => (
            <div key={index} className="">
                <Doctor name={doctor.name} email={doctor.email} number={doctor.number}
                    onSuccessClick={handleSuccessClick}
                    onDelete={handleDelete}
                />
            </div>
        ));
    };

    return (
        <div className="overflow-x-hidden BackAdmin font-[StemRegular]">
            <NavAdmin />
            <div className="flex items-center justify-center">
                <div className="space-y-4 bg-gray bg-opacity-60 w-[85%] p-10">
                    <div className="flex flex-row justify-between px-10 font-[Stem-Bold] text-blue">
                        <span>Doctor</span>
                        <span>Email</span>
                        <span>Phone Number</span>
                        <span>Certification</span>
                        <span>Action</span>
                    </div>

                    <div className="max-h-[420px] overflow-y-auto">
                        {generateDoctors()}
                    </div>

                    {showPopUp &&
                        <div>
                            <PopUpEmail texte={"Congrats the doctor by sending him an email"} onClose={handleSuccessClick} />
                        </div>
                    }

                    {showPopUp2 &&
                        <div>
                            <PopUpDelete texte={"Are you sure you want to delete Doctor  Nesrine_ben from the list of doctors ?"} onClose2={handleDelete} />
                        </div>
                    }
                </div>

            </div>

        </div>

    );
}

export default Admin