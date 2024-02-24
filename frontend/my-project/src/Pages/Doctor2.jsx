import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import NavDoctor from "../Components/NavDoctor";

function Doctor2() {

    const [date, setDate] = useState(null);

    const onChange = date => {
      setDate(date);
      onDateSelect(date); 
  
    };

    return(
        <div className="overflow-x-hidden BackDoctor2 font-[StemRegular]">
            <NavDoctor/>
            <div className="flex flex-col items-center p-20">
                
                <div className=" w-[40%]">
                    <span className="text-2xl font-bold text-blue"> Selected Date </span>

                    <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
                        <DatePicker
                            selected={date}
                            onChange={onChange}
                            value={date}
                            placeholderText="dd/mm/yyyy"
                            showPopperArrow={false}
                            dateFormat="dd/MM/yyyy" // Format de la date ici
                            className="outline-none bg-LightGreen"
                        />
                    </div>        
                </div>
                
            <div className="w-[40%]">
                <span className="text-2xl font-bold text-blue"> Time Slots </span>    

                <div className="flex flex-row p-4 bg-LightGreen w-[100%] items-center mt-4 cursor-pointer">
                    <span className="text-blue text-opacity-30"> start date : end date </span>
                </div>
            </div>
            
            <div className="p-4 bg-LightGreen w-[40%] cursor-pointer mt-4 mb-8 text-center">
                <span className="text-xl font-bold text-blue text-opacity-30"> Add this slot </span>
            </div>
            
            <div className="p-4 bg-LightGreen w-[40%] items-center mt-8 cursor-pointer text-center">
                <span className="text-2xl font-bold text-blue text-opacity-30 "> Save </span>
            </div>


        </div>
   
            
        </div>
        
    );
}

export default Doctor2