import React from 'react'
import NavUser from "../Components/NavUser";
import Comment from '../Components/Comment';


function Lending  ({comments}) {
    
      const generateComments = () => {
        return comments.map((comment, index) => (
            <div key={index} className="">
                <Comment Title={comment.Title} Content={comment.Content}  />
            </div>
        ));
    };

  return (
    <div className="space-y-10">
      <NavUser/>
      <div className="flex flex-col justify-center  p-4 w-[80%]">
            <span className="mb-4 text-x-[40px] text-blue  font-bold font-[Stem-Bold]">Save a life by telling your story</span>
            <div className=" bg-gray items-center w-[100%] bg-opacity-60 rounded-xl">
            <div className="flex flex-col items-center py-2 text-blue font-bold">
                <span>Write your own story here</span>
                <input className='bg-transparent opacity-75 items-center w-[100%] text-medium text-[Stem-mdium]'
                value={"it’s anonymous"}
                 onChange={(e) => {("it’s anonymous", e.target.value)}}
                />
            </div>
            </div>
            <div className='flex flex-col p-4 space-y-4 w-[100%] '>
        
                {generateComments()}
            
            </div>
        </div>   
    </div>
  )
}

export default Lending