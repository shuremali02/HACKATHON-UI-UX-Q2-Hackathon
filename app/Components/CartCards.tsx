
import Image from 'next/image';
import React from 'react';

interface Carts {
  image: string;
  title: string;
  description: string;
  price: number;
  onDelete: () => void;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function CartCards({
  image,
  title,
  description,
  price,
  onDelete,
  count,
  onIncrement,
  onDecrement,
}: Carts) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      {/* Left Section: Image and Text */}
      <div className="flex items-start gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
          <Image src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        {/* Text Details */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <p className="font-bold text-primary mt-2">${price}</p>
        </div>
      </div>

      {/* Right Section: Delete Button and Counter */}
      <div className="flex flex-col items-center">
        {/* Delete Button */}
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition mb-4"
        >
          Delete
        </button>

        {/* Counter */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrement}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex justify-center items-center"
          >
            -
          </button>
          <span className="text-gray-800 font-medium">{count}</span>
          <button
            onClick={onIncrement}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

