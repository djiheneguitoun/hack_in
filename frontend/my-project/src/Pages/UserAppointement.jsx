import React from "react";
import { useState } from "react";
import NavUser from "../Components/NavUser"; 
import OnSite from "../Components/OnSite";
import OnLine from "../Components/OnLine";
import OnSiteDoc from "../Components/OnSiteDoc";
import OnLineDoc from "../Components/OnLineDoc";

function UserAppointement({onsites, onlines}) {

    return (
        <div className="pb-10 overflow-x-hidden BackDoctor font-[StemRegular]">
            <NavUser/>
            <div className="overflow-y-auto">
                <div className="flex flex-col items-center ">
                    <OnSiteDoc doctors={onsites}/>
                </div> 
                <div className="flex flex-col items-center ">
                    <OnLineDoc doctors={onlines}/>
                </div>       
            </div>
     
        </div>

    );
}

export default UserAppointement