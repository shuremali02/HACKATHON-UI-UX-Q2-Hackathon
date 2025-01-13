"use client"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

import CartItem from "../Components/CartItem";
const cartItems = [
  {
    id: 1,
    imageSrc: "/images/Category-1.svg",
    altText: "Gradient Graphic T-shirt",
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
  },
  {
    id: 2,
    imageSrc: "/images/Selling3.svg",
    altText: "Checkered Shirt",
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
  },
  {
    id: 3,
    imageSrc: "/images/Selling2.svg",
    altText: "Skinny Fit Jeans",
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
  },
];


export default function Cart() {
  const handleQuantityChange = (id: number, newQuantity: number) => {
    alert(`Item ${id} new quantity: ${newQuantity}`);
    // Update state logic here
  };

  const handleRemove = (id: number) => {
    alert(`Item ${id} removed`);
    // Remove item logic here
  };
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="p-4 ">
        <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section: Cart Items */}
          <div className="lg:col-span-2 rounded-3xl border-2 border-gray-300 py-2">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          imageSrc={item.imageSrc}
          altText={item.altText}
          title={item.title}
          size={item.size}
          color={item.color}
          price={item.price}
          quantity={item.quantity}
          onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
    </div>
  
          {/* Right Section: Order Summary */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
  
            {/* Subtotal */}
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">$565</span>
            </div>
  
            {/* Discount */}
            <div className="flex justify-between mb-2">
              <span>Discount (-20%):</span>
              <span className="text-red-500">-$113</span>
            </div>
  
            {/* Delivery Fee */}
            <div className="flex justify-between mb-2">
              <span>Delivery Fee:</span>
              <span>$15</span>
            </div>
  
            {/* Total */}
            <div className="border-t mt-2 pt-2 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$467</span>
            </div>
  
            {/* Promo Code */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full p-2 border rounded-md mb-2"
              />
              <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
                Apply
              </button>
            </div>
  
            {/* Checkout Button */}
            <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>
    );
  }
  