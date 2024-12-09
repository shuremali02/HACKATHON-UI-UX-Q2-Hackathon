import React from 'react'
import  Cards, { ProductCards } from '../Cards';
import { Button } from '@/components/ui/button';


export default function NewArrivals() {


const Products: ProductCards[] = [
  {
    image: "images/Selling1.svg",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    rating: 4.55
  },
  {
    image: "images/Selling2.svg",
    title: "SKINNY FIT JEANS",
    price: 240,
    priceStrikeThrough:260,
    saleBadge: "-20%",
    rating: 4.8
  },
  {
    image: "images/Selling3.svg",
    title: "CHECKERED SHIRT",
    price: 180,
    rating: 4.2
  },
  {
    image: "images/Selling4.svg",
    title: "Digital Camera",
    price: 130,
    priceStrikeThrough:160,
    saleBadge: "-30%",
    rating: 4.7
  }
];
  return (

    <div className='flex flex-col w-full space-y-4 py-4 pt-11  justify-center'>
        <div className=''>
            <h1 className='font-bold text-5xl text-center'>NEW ARRIVALS</h1>
        </div>
        <div>
        <div className='grid grid-cols-4 gap-6 px-12'>
            {Products.map((product,index) => (
                <Cards key={index} {...product} />
            ))}
        </div >
        </div>

        <div className='flex items-center justify-center px-10 p-14'>
        <Button className='p-6 px-9 rounded-none bg-transparent  text-Button '
      >view All</Button>
      </div>
    </div>
  )
}
