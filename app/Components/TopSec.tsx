import React from 'react';


export default function TopHeader() {
  return (
    <div className='hidden md:flex bg-black  w-full text-sm text-gray-400 px-12'>
      <div className='md:max-w[1440px]  flex justify-end items-center py-2 px-4 mx-auto gap-[380px]'>
        <div className=' '>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! {" "}
          <span className=' underline cursor-pointer '> Sign Up Now</span>
        </div>

        <div className='gap-2 flex items-center '>
          X
        </div>
      </div>
    </div>
  )
}
