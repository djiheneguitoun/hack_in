import React from "react";
import User from "../Components/User";
import NavUser from "../Components/NavUser";
import NavFiltre from "../Components/NavFiltre";

function Users({ users }) {

    const generateUsers = () => {
        return users.map((user, index) => (
            <div key={index} className="">
                <User name={user.name} place={user.place} desc={user.desc} />
            </div>
        ));
    };

    return (
        <div className="space-y-10">
            <NavUser />
            <NavFiltre />
            {generateUsers()}
        </div>

    );
}

export default Users