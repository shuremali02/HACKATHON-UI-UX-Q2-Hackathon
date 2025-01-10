import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function Cart() {
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
          <div className="lg:col-span-2">
            {/* Item 1 */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded shadow">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/Category-1.svg"
                  alt="Gradient Graphic T-shirt"
                  height={124}
                  width={124}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">Gradient Graphic T-shirt</h2>
                  <p className="text-sm text-gray-500">Size: Large | Color: White</p>
                  <p className="text-md font-bold">$145</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span className="font-medium">1</span>
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
                <button className="text-red-500 hover:text-red-700">🗑</button>
              </div>
            </div>
  
            {/* Item 2 */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded shadow">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/Selling3.svg"
                  alt="Checkered Shirt"
                  height={124}
                  width={124}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">Checkered Shirt</h2>
                  <p className="text-sm text-gray-500">Size: Medium | Color: Red</p>
                  <p className="text-md font-bold">$180</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span className="font-medium">1</span>
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
                <button className="text-red-500 hover:text-red-700">🗑</button>
              </div>
            </div>
  
            {/* Item 3 */}
            <div className="flex items-center justify-between p-4 bg-white rounded shadow">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/Selling2.svg"
                  alt="Skinny Fit Jeans"
                  height={124}
                  width={124}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">Skinny Fit Jeans</h2>
                  <p className="text-sm text-gray-500">Size: Large | Color: Blue</p>
                  <p className="text-md font-bold">$240</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span className="font-medium">1</span>
                <button className="px-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
                <button className="text-red-500 hover:text-red-700">🗑</button>
              </div>
            </div>
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
  