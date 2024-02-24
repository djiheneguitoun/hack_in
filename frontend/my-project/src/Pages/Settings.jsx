import React,{useState} from "react"
import NavDoctor from "../Components/NavDoctor"

const Settings =()=>{

    const [user] = useState({
      username: '',
    
      email:'',
        password:'',
    });
    
return (
<div className="BackDoctor2" >
    <NavDoctor/>
    <div className="flex flex-col items-center p-20">
        <div className=" w-[40%] space-y-3">
         <span className="text-2xl font-bold text-blue">Username</span>
         <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
         <input  className="font-bold text-blue bg-transparent w-[100%]"
         value={user.username}
         onChange={(e) => handleInputChange("username", e.target.value)}/>
        </div>
        <span className="text-2xl font-bold text-blue">Email</span>
      <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
        <input  className="font-bold text-blue bg-transparent w-[100%]"
        value={user.email}
        onChange={(e) => handleInputChange("Email", e.target.value)}
      />
        </div>
        <span className="text-2xl font-bold text-blue">Password</span>
      <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
        <input className="font-bold text-blue bg-transparent w-[100%]"
         type="password"
         value={user.password}
         onChange={(e) => handleInputChange("password", e.target.value)}
       />
        </div>
        <span className="text-2xl font-bold text-blue">Confirm Password</span>
      <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4">
         <input   className="font-bold text-blue bg-transparent w-[100%]"
          type="password"
          value={user.confirmPassword}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
         />
        </div>
        <div className="bg-LightGreen w-[100%] rounded p-4 mb-8 mt-4 text-center font-bold text-blue font-[Stem-Medium]">
          <button>Save</button>
        </div>
    </div>
    </div>
</div>
)
}
export default Settings