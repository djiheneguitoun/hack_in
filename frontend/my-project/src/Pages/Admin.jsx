import React from "react";
import { useState } from "react";
import Doctor from "../Components/Doctor";
import NavAdmin from "../Components/NavAdmin";
import PopUpEmail from "../Components/PopUpEmail";
import PopUpDelete from "../Components/PopUpDelete";

function Admin({ doctors}) {

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
        <div className="BackAdmin">
            <NavAdmin/>
            <div className="flex items-center justify-center py-16">
                <div className="flex flex-col space-y-4 bg-gray bg-opacity-60 w-[85%] p-10">          
                    <div className="flex flex-row justify-between px-10 font-bold text-x-[32px] text-blue">
                        <span>Doctor</span>
                        <span>Email</span>
                        <span>Phone Number</span>
                        <span>Certification</span>
                        <span>Action</span>
                    </div>

                    {generateDoctors()}   
                    
                    {showPopUp && 
                    <div>
                        <PopUpEmail texte={"Congrats the doctor by sending him an email"} onClose={handleSuccessClick}/>
                    </div>
                    }
                    
                    {showPopUp2 && 
                    <div>
                        <PopUpDelete texte={"Congrats the doctor by sending him an email"} onClose2={handleDelete}/>
                    </div>
                    }
                </div>  
                    
            </div>

        </div>

    );
}

export default Admin