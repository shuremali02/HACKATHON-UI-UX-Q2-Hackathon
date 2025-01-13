"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideBar from "../Components/SideBar";
import { Button } from "@/components/ui/button";
import Cards, { ProductCards } from "@/app/Components/Cards";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function CategoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar Open/Close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      priceStrikeThrough: 150,
      saleBadge: "-30%",
      rating: 4.2,
    },
    // Add more products here
  ];

  return (
    <div className="relative flex w-full">
      {/* Sidebar Section (Hidden by default on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 lg:translate-x-0 lg:static lg:block`}
      >
        {/* Close Button (Visible only on mobile when sidebar is open) */}
        <button
          className="absolute top-4 right-4 text-gray-800 lg:hidden"
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={24} />
        </button>
        <SideBar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 py-4 space-y-8">
        {/* Breadcrumb Section */}
        <div className="p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Casual</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header Section */}
        <div className="flex justify-between items-center px-4">
          <h1 className="font-semibold text-4xl">Casual</h1>

          {/* Toggle Button for Sidebar (Mobile Only) */}
          <button
            className="text-gray-800 lg:hidden"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 md:gap-6">
          {Products.map((product, index) => (
            <Cards key={index} {...product} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between items-center space-x-4 px-4">
          <Button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center">
            <FaArrowLeft className="mr-2" /> Previous
          </Button>
          <div className="text-gray-700">1 {""} 2 {""} 3 ... 8 {""} 9 {""} 10</div>
          <Button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center">
            Next <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
