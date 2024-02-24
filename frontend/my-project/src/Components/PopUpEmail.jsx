import React from "react";
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";
import Cross from '../Img/cross.svg';

function PopUpEmail({ texte, onClose }) {

    const handleClose = () => {
        onClose();
    };

    return (
        
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-xs bg-darkBlue bg-opacity-40 font-[StemRegular]">
            <div className="flex flex-col items-start justify-center px-6 py-6 w-[35%] space-y-6 relative bg-white rounded-2xl">
                <img src={Cross} alt="Cross" className="absolute w-4 h-4 cursor-pointer top-6 right-6" onClick={handleClose}/>
                <span className="px-2"> {texte} </span>
                <textarea
                    type="text"
                    placeholder="Write the email here"
                    className="flex-grow h-auto px-4 py-4 bg-gray rounded-lg focus:outline-0 w-[100%]"
                />
                <div className="flex flex-row w-[100%] justify-between">
                    <CancelButton onCancel={handleClose}/>
                    <ConfirmButton />
                </div>
            </div>
        </div>
       

    );
}

export default PopUpEmail