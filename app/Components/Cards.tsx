"use client";
import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export interface ProductCards {
  image: string;
  title: string;
  price: number;
  priceStrikeThrough?: number;
  saleBadge?: string;
  rating?: number;
}

export default function Cards({
  image,
  title,
  price,
  priceStrikeThrough,
  saleBadge,
  rating,
}: ProductCards) {
  const Stars = 5;

  return (
    <div className="w-full flex flex-col max-w-md justify-center items-start   ">
      {/* Product Image */}
      <div className="flex items-center justify-center ">
        <Image
          src={image}
          alt={title}
          width={296}
          height={350}
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Product Details */}
      <div className="mt-3">
        {/* Title */}
        <h3 className="text-sm font-bold text-gray-800 truncate">
          {title.length > 20? (title.slice(0,20)):(title)}
        </h3>

        {/* Rating */}
        {rating !== undefined && (
          <div className="flex  mt-2 gap-1">
            {Array.from({ length: Stars }).map((_, index) => (
              <IoMdStar
                key={index}
                size={14}
                className={`${
                  index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600">({rating}/5)</span>
          </div>
        )}
           {/* Price Section */}
        <div className="flex mt-2 gap-2">
          <p className="text-lg font-bold text-gray-800">${price}</p>
          {priceStrikeThrough && (
            <p className="text-sm text-gray-500 line-through">
              ${priceStrikeThrough}
            </p>
          )}
        
        {/* Sale Badge */}
        {saleBadge && (
          <div className="mt-2">
            <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
              {saleBadge}
            </span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
