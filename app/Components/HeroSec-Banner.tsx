import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSecBanner() {
  return (
    <div className="max-w-[1440px] bg-[#F2F0F1] mx-auto w-full px-5 pt-6 text-black flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section: Text Content */}
        <div className="w-full flex flex-col items-start justify-center md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-center md:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className="md:flex w-full justify-center md:justify-start">
          <Button className="bg-black text-white w-full md:w-auto md:px-6 md:py-3 rounded-lg">
  Shop Now
</Button>

          </div>
          {/* Statistics Section */}
          <div className="flex justify-around md:justify-start md:space-x-10 mt-6">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">200+</p>
              <p className="text-xs md:text-sm text-gray-500">
                International Brands
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">2,000+</p>
              <p className="text-xs md:text-sm text-gray-500">
                High-Quality Products
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">30,000+</p>
              <p className="text-xs md:text-sm text-gray-500">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/images/image.png"
            alt="Fashion Banner"
            width={721}
            height={664}
            className="w-[80%] md:w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
