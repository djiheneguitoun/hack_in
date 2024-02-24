import React from "react";
import { useState } from "react";
import Success from '../Img/success.svg';
import Delete from '../Img/delete.svg';

function Doctor({ name, email, number, onSuccessClick, onDelete }) {
    const handleSuccessClick = () => {
        onSuccessClick();
    };
    
    const handleDelete = () => {
        onDelete();
    };
    
    return (
        <div className="flex flex-row items-center justify-between px-10 py-4 font-[StemRegular]">
            <span className="text-x-[3px]">{name}</span>
            <span className="text-x-[3px]">{email}</span>
            <span className="text-x-[3px]">{number}</span>
            <button className="px-8 py-2 text-white bg-blueLight"> View </button>
            <div className="flex flex-row justify-between">
                <img src={Success} alt="Success" className="w-8 h-8 cursor-pointer" onClick={handleSuccessClick} />
                <img src={Delete} alt="Delete" className="w-8 h-8 cursor-pointer" onClick={handleDelete}/>
            </div>

        </div>

    );
}

export default Doctor