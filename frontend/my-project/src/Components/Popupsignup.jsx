import React from 'react'


function Popup({ visible, onClose }) {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="h-64 w-96 bg-white flex flex-col justify-center items-center">
        <button
              className="place-self-end text-item-col text-md bg-sidebar pr-5" 
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