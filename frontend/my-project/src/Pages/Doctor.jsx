import React from "react";
import { useState } from "react";
import NavDoctor from "../Components/NavDoctor";
import OnSite from "../Components/OnSite";
import OnLine from "../Components/OnLine";

function Doctor({onsites, onlines}) {

    return (
        <div className="overflow-x-hidden BackDoctor">
            <NavDoctor/>
            <div className="overflow-y-auto">
                <div className="flex flex-col items-center ">
                    <OnSite patients={onsites}/>
                </div> 
                <div className="flex flex-col items-center ">
                    <OnLine patients={onlines}/>
                </div>       
            </div>
     
        </div>

    );
}

export default Doctor