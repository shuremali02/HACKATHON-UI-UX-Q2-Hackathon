import React from 'react';
import Cards, { ProductCards } from '../Cards';
import { Button } from '@/components/ui/button';

export default function TopSelling() {
  const SellingProducts: ProductCards[] = [
    {
      image: 'images/Selling5.svg',
      title: 'VERTICAL STRIPED SHIRT',
      price: 212,
      priceStrikeThrough: 232,
      saleBadge: '-25%',
      rating: 4.5,
    },
    {
      image: 'images/Selling6.svg',
      title: 'COURAGE GRAPHIC T-SHIRT',
      price: 145,
      rating: 4.8,
    },
    {
      image: 'images/Selling7.svg',
      title: 'LOOSE FIT BERMUDA SHORTS',
      price: 180,
      rating: 4.2,
    },
    {
      image: 'images/Selling8.svg',
      title: 'FADED SKINNY JEANS',
      price: 210,
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      {/* Section Title */}
      <div>
        <h1 className="font-bold text-5xl">TOP SELLING</h1>
      </div>

      {/* Products Grid */}
      <div className="w-full">
        <div className="md:grid md:grid-cols-4 md:gap-6 flex overflow-x-auto space-x-6 px-4 scrollbar-hide">
          {SellingProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 md:w-auto"
            >
              <Cards {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center px-10 p-14 w-full justify-center">
        <Button className="w-full max-w-xs md:max-w-fit md:w-auto p-4 md:p-6 rounded-full bg-transparent text-Button">
          View All
        </Button>
      </div>
    </div>
  );
}
