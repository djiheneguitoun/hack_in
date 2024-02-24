import React from 'react'

function Comment ({Title, Content})  {
 
  return (
    <div className='flex flex-col  bg-gray bg-opacity-60 rounded-xl items-center p-y-4'>
        <span className="font-bold font-[Stem-Bold] ">{Title}</span>
        <span className="font-medium font-[Stem-Medium]">{Content}</span>
    </div>
  )
}

export default Comment