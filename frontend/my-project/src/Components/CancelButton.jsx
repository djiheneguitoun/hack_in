import React from "react";

function CancelButton({onCancel}) {

    const handleCancel = () => {
        onCancel();
    };
    

    return (
        <div className="flex items-center justify-center px-6 py-6 cursor-pointer font-[StemRegular]" onClick={onCancel}>
            <span className="px-10 py-2 text-blue bg-white rounded-[6px] text-opacity-60 font-bold"> Cancel </span>
        </div>
    );
}

export default CancelButton