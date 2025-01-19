"use client"

import React from 'react';
import Image from "next/image"
import { WatchesXPerfumes } from '@/lib/dataFetching';


// export interface ProductCardProps {
//   id:number,
//   image: string;
//   title: string;
//   description:string,
//   price: number;
//   priceStrikeThrough?: number;
// }
export default function JustForYou({
  imageUrl,
  name,
  description,
  price,
  priceWithoutDiscount,

}:WatchesXPerfumes){
  if(imageUrl&&
    name&&
    description&&
    price&&
    priceWithoutDiscount){
      return (
        <div className="w-full bg-white overflow-hidden">
          {/* Product Image */}
          <div className="w-full h-[427px] flex justify-center items-center">
            <Image
              src={imageUrl}
              alt={name}
              width={238}
              height={427}
              className="w-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="p-4 flex flex-col gap-2 justify-center items-center">
            {/* Product Title */}
            <h3 className="text-base font-semibold text-gray-800 truncate">
              {name}
            </h3>
    
            {/* Product Description */}
            <p className="text-sm text-gray-600 truncate">
              {description?.slice(0,20)}
            </p>
    
            {/* Product Price */}
            <div className="flex gap-2 items-center">
              {priceWithoutDiscount && (
                <p className="text-sm text-gray-400">
                  ${priceWithoutDiscount}
                </p>
              )}
              <p className="text-lg text-[#23856D] font-bold">${price}</p>
            </div>
            <div className='flex gap-4'>
              <p className='w-4 h-4 rounded-full bg-Button'></p>
              <p className='w-4 h-4 rounded-full bg-[#23856D]'></p>
              <p className='w-4 h-4 rounded-full bg-[#E77C40]'></p>
              <p className='w-4 h-4 rounded-full bg-[#252B42]'></p>
            </div>
          </div>
        </div>
      );
    }
  
};


