import React from "react";
import Cards, { ProductCards } from "./Cards";
import { Button } from "@/components/ui/button";

export default function YouMight() {
  const SellingProducts: ProductCards[] = [
    {
      image: "images/Selling5.svg",
      title: "VERTICAL STRIPED SHIRT",
      price: 212,
      priceStrikeThrough: 232,
      saleBadge: "-25%",
      rating: 4.5,
    },
    {
      image: "images/Selling6.svg",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: 145,
      rating: 4.8,
    },
    {
      image: "images/Selling7.svg",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.2,
    },
    {
      image: "images/Selling8.svg",
      title: "FADED SKINNY JEANS",
      price: 210,
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      {/* Heading */}
      <div>
        <h1 className="font-bold text-5xl text-center">You might also like</h1>
      </div>

      {/* Products Section */}
      <div className="w-full px-4">
        {/* Horizontal Scroll for Mobile */}
        <div className="sm:block lg:hidden overflow-x-auto whitespace-nowrap space-x-4">
          {SellingProducts.map((product, index) => (
            <div
              key={index}
              className="inline-block w-60 flex-shrink-0"
            >
              <Cards {...product} />
            </div>
          ))}
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {SellingProducts.map((product, index) => (
            <Cards key={index} {...product} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex items-center px-10 p-14">
        <Button className="p-6 px-9 rounded-none bg-transparent text-Button border border-gray-500">
          View All
        </Button>
      </div>
    </div>
  );
}
