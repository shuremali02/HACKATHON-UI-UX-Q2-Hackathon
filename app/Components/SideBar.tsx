"use client";
import React, { useState } from "react";
import { Slider } from "@mui/material";

export default function SideBar() {
  const [price, setPrice] = useState([50, 200]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <div className="w-[295px] fixed top-0 bg-gray-50 p-4 border rounded-md shadow-sm">
      {/* Filters Title */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button className="text-sm text-blue-500">Reset</button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Categories</h4>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Jeans</span>
            <button className="text-gray-400">→</button>
          </li>
          <li className="flex justify-between">
            <span>Shorts</span>
            <button className="text-gray-400">→</button>
          </li>
          <li className="flex justify-between">
            <span>Shirts</span>
            <button className="text-gray-400">→</button>
          </li>
          <li className="flex justify-between">
            <span>Hoodie</span>
            <button className="text-gray-400">→</button>
          </li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Price</h4>
        <div className="flex items-center space-x-2">
          <span className="text-sm">$ {price[0]}</span>
          <Slider
            value={price}
            onChange={handlePriceChange}
            min={0}
            max={500}
            className="w-full"
          />
          <span className="text-sm">$ {price[1]}</span>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Colors</h4>
        <div className="flex gap-2">
          {["green", "red", "yellow", "blue", "pink", "purple", "black"].map(
            (color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${
                  color === "black" ? "border-white" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></button>
            )
          )}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"].map(
            (size) => (
              <button
                key={size}
                className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
              >
                {size}
              </button>
            )
          )}
        </div>
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Dress Style</h4>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Casual</span>
            <button className="text-gray-400">→</button>
          </li>
          <li className="flex justify-between">
            <span>Formal</span>
            <button className="text-gray-400">→</button>
          </li>
          <li className="flex justify-between">
            <span>Party</span>
            <button className="text-gray-400">→</button>
          </li>
        </ul>
      </div>

      {/* Apply Filters Button */}
      <div className="text-center">
        <button className="w-full bg-black text-white py-2 rounded-md">
          Apply Filters
        </button>
      </div>
    </div>
  );
}