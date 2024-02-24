import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function ReviewUp() {

    const [date, setDate] = useState(null);

    const onChange = date => {
        setDate(date);
        onDateSelect(date);

    };

    return (
        <div className="px-16 w-[100%] pt-10 flex flex-row justify-between font-[StemRegular]">
            <div className="w-[45%]">
                <span >Select Date</span>
                <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
                    <DatePicker
                        selected={date}
                        onChange={onChange}
                        value={date}
                        placeholderText="dd/mm/yyyy"
                        showPopperArrow={false}
                        dateFormat="dd/MM/yyyy" // Format de la date ici
                        className="outline-none bg-LightGreen w-[100%]"
                    />
                </div>
            </div>

            <div className="w-[50%]">
                <span>Select a time slots</span>
                <input className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4" placeholder="start date : end date" />
            </div>
        </div>
    )
}

export default ReviewUp