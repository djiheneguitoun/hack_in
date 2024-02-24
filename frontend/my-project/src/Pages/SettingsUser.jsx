import React, { useState } from "react"
import NavDoctor from "../Components/NavDoctor"
import NavUser from "../Components/NavUser";

const Settings = () => {

    const [user] = useState({
        username: '',

        email: '',
        password: '',
    });

    return (
        <div className="overflow-x-hidden overflow-y-hidden BackDoctor2" >
            <NavUser />
            <div className="flex flex-col items-center pt-6">
                <div className=" w-[40%] space-y-6">
                    <div className="space-y-1">
                        <span className="text-xl font-bold text-blue">Username</span>
                        <div className="bg-LightGreen w-[100%] rounded">
                            <input className="font-bold text-blue bg-LightGreen w-[100%] rounded p-4"
                                value={user.username}
                                onChange={(e) => handleInputChange("username", e.target.value)} />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xl font-bold text-blue">Email</span>
                        <div className="bg-LightGreen w-[100%] rounded">
                            <input className="font-bold text-blue bg-LightGreen w-[100%] rounded p-4"
                                value={user.email}
                                onChange={(e) => handleInputChange("Email", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xl font-bold text-blue">Password</span>
                        <div className="bg-LightGreen w-[100%] rounded">
                            <input className="font-bold text-blue bg-LightGreen w-[100%] rounded p-4"
                                type="password"
                                value={user.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xl font-bold text-blue">Confirm password</span>
                        <div className="bg-LightGreen w-[100%] rounded">
                            <input className="font-bold text-blue bg-LightGreen w-[100%] rounded p-4"
                                type="password"
                                value={user.confirmPassword}
                                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="bg-LightGreen w-[100%] rounded text-center font-bold text-blue font-[Stem-Medium] mt-8 p-4">
                        <button className="text-xl">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings