import React from 'react'
import  Cards, { ProductCards } from '../Cards';
import { Button } from '@/components/ui/button';


export default function TopSelling() {


const SellingProducts: ProductCards[] = [
  {
    image: "images/Selling5.svg",
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    priceStrikeThrough: 232,
    saleBadge: "-25%",
    rating: 4.5
  },
  {
    image: "images/Selling6.svg",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    rating: 4.8
  },
  {
    image: "images/Selling7.svg",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 180,
    rating: 4.2
  },
  {
    image: "images/Selling8.svg",
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 4.7
  }
];
  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>
        <div className=''>
            <h1 className='font-bold text-5xl'>TOP SELLING</h1>
        </div>
        <div>
        <div className='grid grid-cols-4 gap-6 '>
            {SellingProducts.map((product,index) => (
                <Cards key={index} {...product} />
            ))}
        </div >
        </div>

        <div className='flex items-center  px-10 p-14'>
        <Button className='p-6 px-9 rounded-none bg-transparent  text-Button '
      >view All</Button>
      </div>
    </div>
  )
}
