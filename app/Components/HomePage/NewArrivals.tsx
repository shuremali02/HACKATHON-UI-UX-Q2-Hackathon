import React from 'react';
import Cards, { ProductCards } from '../Cards';
import { Button } from '@/components/ui/button';

export default function NewArrivals() {
  const Products: ProductCards[] = [
    {
      image: 'images/Selling1.svg',
      title: 'T-SHIRT WITH TAPE DETAILS',
      price: 120,
      rating: 4.55,
    },
    {
      image: 'images/Selling2.svg',
      title: 'SKINNY FIT JEANS',
      price: 240,
      priceStrikeThrough: 260,
      saleBadge: '-20%',
      rating: 4.8,
    },
    {
      image: 'images/Selling3.svg',
      title: 'CHECKERED SHIRT',
      price: 180,
      rating: 4.2,
    },
    {
      image: 'images/Selling4.svg',
      title: 'Digital Camera',
      price: 130,
      priceStrikeThrough: 160,
      saleBadge: '-30%',
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col w-full md:p-12 space-y-4  pt-11 justify-center">
      {/* Section Title */}
      <div>
        <h1 className="font-bold text-5xl text-center">NEW ARRIVALS</h1>
      </div>

      {/* Products Grid */}
      <div className="mx-auto w-full">
        <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide">
          {Products.map((product, index) => (
            <div key={index} className="min-w-[250px]">
              <Cards {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center px-10 p-14">
        <Button className="p-6 px-9 rounded-none bg-transparent text-Button">
          View All
        </Button>
      </div>
    </div>
  );
}
