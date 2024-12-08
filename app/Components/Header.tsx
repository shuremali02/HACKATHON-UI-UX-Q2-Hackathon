import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="bg-bg flex items-center justify-between px-4 md:px-8 lg:px-16">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="font-serif text-[24px] lg:text-[32px]">Shop . Co</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        <select
          defaultValue="shop"
          className="bg-bg text-text border-none cursor-pointer outline-none hover:underline"
        >
          <option value="sp">Shop</option>
          <option value="Wm">Woman</option>
          <option value="Kd">Kids</option>
        </select>
        <Link href={"#"} className="hover:underline">
          On Sale
        </Link>
        <Link href={"#"} className="hover:underline">
          New Arrivals
        </Link>
        <Link href={"#"} className="hover:underline">
          Brands
        </Link>
      </div>

      {/* Search Bar & Icons */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex items-center h-[40px] w-full  lg:max-w-[577px] bg-neutral-100 rounded-3xl px-4">
          <div className="absolute left-3 text-gray-500">
            <CiSearch size={20} />
          </div>
          <input
            type="search"
            placeholder="Search for products"
            className="w-full pl-10 pr-4 text-sm text-gray-600 bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart size={24} className="cursor-pointer" />
          <CgProfile size={24} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}