"use client";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-bg flex items-center justify-between h-[64px] px-4 md:px-11 lg:px-16">
      {/* Logo and Menu Button */}
      <div className="flex items-center">
        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-text md:hidden mr-2"
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Logo */}
        <Image
          src={"/images/SHOP.CO.svg"}
          alt="Logo"
          width={160}
          height={22}
          className="w-[100px] h-auto md:w-[160px]"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        <select
          defaultValue="shop"
          className="bg-bg text-text border-none cursor-pointer outline-none hover:underline"
        >
          <option value="sp">Shop</option>
          <option value="Wm">Woman</option>
          <option value="Kd">Kids</option>
        </select>
        <Link href={"/Category"} className="hover:underline">
         Shop
        </Link>
        <Link href={"/ProductDetails"} className="hover:underline">
          Product Details
        </Link>
        <Link href={"#"} className="hover:underline">
          Brands
        </Link>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:flex items-center bg-neutral-100 rounded-3xl px-4 md:w-[577px] md:h-[48px]">
          <div className="absolute left-3 text-gray-500">
            <CiSearch size={20} />
          </div>
          <input
            type="search"
            placeholder="Search for products"
            className="w-full h-full pl-10 pr-4 text-sm text-gray-600 bg-transparent outline-none"
          />
        </div>

        {/* Search Icon for Mobile */}
        <CiSearch size={24} className="cursor-pointer md:hidden" />

        {/* Cart and Profile Icons */}
        <div className="flex items-center gap-4">
         <Link href={"/Cart"}> <ShoppingCart size={24} className="cursor-pointer" /></Link>
          <CgProfile size={24} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center text-white space-y-6">
          <Link href={"/Category"} onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link href={"#"} onClick={() => setMenuOpen(false)}>
            On Sale
          </Link>
          <Link href={"/ProductDetails"} onClick={() => setMenuOpen(false)}>
           Product Details
          </Link>
          <Link href={"#"} onClick={() => setMenuOpen(false)}>
            Brands
          </Link>
        </div>
      )}
    </div>
  );
}
