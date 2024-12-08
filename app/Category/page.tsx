import React from "react";
import Cards, { ProductCards } from "@/app/Components/Cards";
import { Button } from "@/components/ui/button";
import SideBar from "../Components/SideBar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function CategoryPage() {
  const Products: ProductCards[] = [
    {
      image: "images/Category-1.svg",
      title: "T-SHIRT WITH TAPE DETAILS",
      price: 145,
      rating: 4.55,
    },
    {
      image: "images/Category2.svg",
      title: "Polo with Tipping Details",
      price: 180,
      
      
      rating: 4.8,
    },
    {
      image: "images/Category3.svg",
      title: "CHECKERED SHIRT",
      price: 120,
      priceStrikeThrough:150,
      saleBadge:"-30%",
      rating: 4.2,
    },
    {
      image: "images/Selling2.svg",
      title: "Digital Camera",
      price: 130,
      priceStrikeThrough: 160,
      saleBadge: "-20%",
      rating: 4.7,
    },
    {
      image: "images/Selling3.svg",
      title: "CHECKERED SHIRT",
      price: 240,
      priceStrikeThrough:260,
      saleBadge:"-20%",
      rating: 4.2,
    },
    {
      image: "images/Selling4.svg",
      title: "CHECKERED SHIRT",
      price: 180,
      rating: 4.2,
    },
    {
      image: "images/Selling5.svg",
      title: "CHECKERED SHIRT",
      price: 180,
      rating: 4.2,
    },
    {
      image: "images/Selling6.svg",
      title: "CHECKERED SHIRT",
      price: 180,
      rating: 4.2,
    },
    {
      image: "images/Selling7.svg",
      title: "CHECKERED SHIRT",
      price: 180,
      rating: 4.2,
    },
  ];

  return (
    <div className="flex w-full">
      {/* Sidebar Section */}
      <div className="hidden lg:block w-1/4 h-screen">
        <SideBar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1  py-4 space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-4xl">Casual</h1>
          <div className="text-lg">
            <span>Showing 1-9 of 9 Products</span>
            <span className="ml-4">
              Sort by:{" "}
              <select
                defaultValue="en"
                className="bg-gray-100 text-gray-800 border border-gray-300 rounded-md px-3 py-1 cursor-pointer outline-none"
              >
                <option value="en">Most Popular</option>
                <option value="fr">Jeans</option>
                <option value="jp">Tshirts</option>
              </select>
            </span>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Products.map((product, index) => (
            <Cards key={index} {...product} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between items-center space-x-4">
          <Button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center">
            <FaArrowLeft className="mr-2" /> Previous
          </Button>|
          <div className="text-gray-700 ">1 {""} 2 {""} 3 ... 8 {""} 9 {""} 10</div>
          |<Button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center">
            Next <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
