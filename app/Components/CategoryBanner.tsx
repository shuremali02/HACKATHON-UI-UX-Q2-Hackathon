import Image from 'next/image'
import React from 'react'

export default function CategoryBanner() {
  return (
    <div>
        <div>
            <h1>BROWSE BY dress STYLE</h1>

        </div>
        <div>
        <div className='grid grid-cols-3 grid-rows-2 bg-red-600 gap-1'>
            <div className='col-span-1 row-span-1  bg-gray-400'>
                <h1>Casual</h1>
                <Image src={"/images/cat1.svg"}
                 alt='Box1' 
                 fill 
                 className='object-cover'/>

            </div>
            <div className='col-span-2 row-span-1 bg-gray-400'>
            <h1>Casual</h1>
                <Image src={"/images/cat1.svg"}  alt='Box1' 
                 fill 
                 className='object-cover'/>

            </div>
            <div className='col-span-2 row-span-1  bg-gray-400'>
            <h1>Casual</h1>
                <Image src={"/images/cat1.svg"}  alt='Box1' 
                 fill 
                 className='object-cover'/>

            </div>
            <div className='col-span-1 row-span-1  bg-gray-400'>
            <h1>Casual</h1>
                <Image src={"/images/cat1.svg"} alt='Box1' 
                 fill 
                 className='object-cover'/>

            </div>
            </div>

        </div>
    </div>
  )
}
