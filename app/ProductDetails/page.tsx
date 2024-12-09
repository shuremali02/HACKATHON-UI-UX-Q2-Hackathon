import Image from "next/image";
import ProductTestimonial from "../Components/ProductTestimonials";

export default function ProductDetails() {
  return (
    <div className="container mx-auto p-6 bg-white">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-6">
        Home &gt; Shop &gt; Men &gt; T-Shirts
      </nav>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="lg:w-1/2 flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/ProDetail1-2.svg"
              alt="Thumbnail 1"
              width={152}
              height={167}
              className=" rounded-lg cursor-pointer border border-gray-300 hover:border-black"
            />
            <Image
              src="/images/ProDetail3.svg"
              alt="Thumbnail 2"
              width={152}
              height={167}
              className=" rounded-lg cursor-pointer border border-gray-300 hover:border-black"
            />
            <Image
              src="/images/ProDetail4.svg"
              alt="Thumbnail 3"
              width={152}
              height={167}
              className=" rounded-lg cursor-pointer border border-gray-300 hover:border-black"
            />
          </div>

          {/* Main Image */}
          <div className=" rounded-lg overflow-hidden">
            <Image
              src="/images/ProDetail1-2.svg"
              alt="Main Product Image"
              width={454}
              height={530}
             layout="responsive"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.95a1 1 0 00.95.69h4.168c.969 0 1.372 1.24.588 1.81l-3.372 2.448a1 1 0 00-.364 1.118l1.284 3.95c.3.921-.755 1.688-1.54 1.118l-3.372-2.448a1 1 0 00-1.176 0l-3.372 2.448c-.784.57-1.838-.197-1.54-1.118l1.284-3.95a1 1 0 00-.364-1.118L2.059 9.377c-.784-.57-.381-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.284-3.95z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold">$260</span>
            <span className="text-gray-400 line-through ml-3">$300</span>
            <span className="text-red-500 ml-3">-40%</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-2">Select Color:</h3>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-green-700 border-2 border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-300"></button>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-2">Choose Size:</h3>
            <div className="flex space-x-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <button className="px-4 py-2 border rounded-md">-</button>
            <span className="px-4">1</span>
            <button className="px-4 py-2 border rounded-md">+</button>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <ProductTestimonial/>
      </div>
    </div>
  );
}
