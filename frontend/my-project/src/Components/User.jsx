import React from "react";

import DoctorProfile from "./DoctorProfile";

function User({ name, place, desc }) {

    return (
        <div>
            <DoctorProfile name={name} place={place} desc={desc} />
        </div>

    );
}

export default User