import React from "react";
import { useState } from "react";
import NavDoctor from "../Components/NavDoctor";
import DocPartLeft from "../Components/DocPartLeft";
import DocPartRight from "../Components/DocPartRight";

function Doctor3() {

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