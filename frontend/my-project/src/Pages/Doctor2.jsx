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

    return (
        <div className="overflow-x-hidden BackDoctor2 font-[StemRegular]">
            <NavDoctor />
            <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] w-[80%] mx-auto">

                <div className="w-[100%]">
                    <span className="text-xl font-bold text-blue"> Selected Date </span>

                    <div className="p-4 mt-4 mb-8 rounded bg-LightGreen">
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

                <div className="w-[100%]">
                    <span className="text-xl font-bold text-blue"> Time Slots </span>

                    <div className="flex flex-row mt-4 bg-LightGreenitems-center">
                        <input className="p-4 text-blue text-opacity-30 bg-LightGreen w-[100%] " placeholder=" start date : end date "></input>
                    </div>
                </div>

                <div className="p-4 bg-LightGreen w-[100%] cursor-pointer mt-4 mb-8 text-center">
                    <span className="font-bold t text-blue"> Add this slot </span>
                </div>

                <div className="p-4 bg-LightGreen w-[100%] items-center cursor-pointer text-center">
                    <span className="font-bold text-blue "> Save </span>
                </div>


            </div>


        </div>

    );
}

export default Doctor2