import React from "react";
import { useState } from "react";
import NavDoctor from "../Components/NavDoctor";
import DocPartLeft from "../Components/DocPartLeft";
import DocPartRight from "../Components/DocPartRight";

function Doctor3() {

    return(
        <div className="BackDoctor3 font-[StemRegular]">
            <NavDoctor/>
            <div className="lg:flex-row lg:flex md:flex md:flex-row">
                <DocPartLeft/>
                <DocPartRight/>  
            </div>
        </div>    
    );
}

export default Doctor3