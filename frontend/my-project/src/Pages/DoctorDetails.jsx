import React from "react";
import NavDoctor from "../Components/NavDoctor";
import DoctorProfile2 from "../Components/DoctorProfile2";
import Review from "../Components/Review";
import ReviewUp from "../Components/ReviewUp";
import ReviewDown from "../Components/ReviewDown";
import NavUser from "../Components/NavUser";

function DoctorDetails({reviews, user}) {

    const generateDoc = () => {
        return reviews.map((review, index) => (
            <div key={index} className="">
                <Review titre={review.titre}                   
                />
            </div>
        ));
    };

    return(
        <div className="pb-20 font-[StemRegular]">
            <NavUser/>
            <DoctorProfile2 name={user.name} place={user.place} desc={user.desc} ccp={user.ccp} />
            <div className="flex flex-col items-center">
                <div className="space-y-6 w-[90%]">
                    <span className="text-xl font-bold text-blue">Doctor Review</span>
                    {generateDoc()}
                </div>
            </div>
            <ReviewUp/>
            <ReviewDown/>
            <div className="flex flex-col px-10 space-x-4">
                <span className="mt-2 font-bold text-blue" >This meeting will be on Google meet and the link provieded. If you do not show up, you will NOT be able to reschedule the meeting with us. </span>
                <div className="mt-2">
                    <input type="checkbox" className="w-4 h-4 outline-red" />
                    <span className="text-blue"> Yes, I will make sure to be on Google meet at the scheduled time.</span>
                </div>
                
                <span className="mt-2 font-bold text-blue"> Yes, I will make sure to be on Google meet at the scheduled time.</span>
                
                <div className="mt-2">
                    <input type="checkbox" className="w-4 h-4 outline-red" />
                    <span className="text-blue"> Yes, of course. </span>
                </div>
                
                <span className="mt-2 font-bold text-blue ">Could you please assess your current mental readiness and confirm if you feel prepared to actively participate in our upcoming session? </span>

                <div className="mt-2">
                    <input type="checkbox" className="w-4 h-4 outline-red" />
                    <span className=" text-blue"> I confirm that i have the mental ability to attend this session </span>
                </div>
        </div>  
        
        <div className="flex flex-row justify-center w-[90%]  pl-10 mt-6">
             <div className="w-[100%] bg-gray text-center py-4 rounded">
                <span className="text-xl font-bold text-blue text-opacity-30"> Confirm </span> 
            </div>

        </div>
    </div> 
    );
}

export default DoctorDetails