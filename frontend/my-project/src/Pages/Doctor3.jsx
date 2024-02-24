import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import NavDoctor from "../Components/NavDoctor";
import DocPartLeft from "../Components/DocPartLeft";
import DocPartRight from "../Components/DocPartRight";

function Doctor3() {

    const [date, setDate] = useState(null);

    const onChange = date => {
      setDate(date);
      onDateSelect(date); 
  
    };

    return(
        <div className="BackDoctor3">
            <NavDoctor/>
            <div className="flex flex-row justify-between">
                <DocPartLeft/>
                <DocPartRight/>  
            </div>
        </div>    
    );
}

export default Doctor3