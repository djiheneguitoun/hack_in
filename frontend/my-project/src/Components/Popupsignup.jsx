import React from 'react'


function Popup({ visible, onClose }) {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-[StemRegular]">
        <div className="flex flex-col items-center justify-center h-64 bg-white w-96">
        <button
              className="pr-5 place-self-end text-item-col text-md bg-sidebar" 
              onClick={onClose}
            >
              x
            </button>
           
        <h2 className="text-blue text-[130%] font-medium font[Stem-Medium]">Thank you for registering with Hung it . Your application has been received, and our team will review it promptly.</h2>
     </div>
      </div>
  )
}

export default Popup