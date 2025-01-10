import React from "react";
import Image from "next/image";

const MyButton = ({ name }: { name: string }) => {
  return (
    <p className="font-bold text-[24px] px-3 py-1 rounded ">
      {name}
    </p>
  );
};

function CategoryBanner() {
  return (
    <div className="hidden md:flex justify-center items-center w-full h-screen bg-[#F0F0F0] md:rounded-3xl">
      {/* Main Content */}
      <div className="w-full max-w-7xl py-12 md:ml-96 px-5">
        {/* Header Section */}
        <h1 className="font-bold text-center text-[36px] mb-8">BROWSE BY DRESS CATEGORY</h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
          {/* Box 1 */}
          <div className="relative rounded-2xl w-full h-[300px] overflow-hidden">
            <Image
              src={"/images/Cat1.svg"}
              alt="Casual"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute top-2 left-2 p-2 flex justify-center items-center">
              <MyButton name={"Casual"} />
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative col-span-2 w-full h-[300px] overflow-hidden">
            <Image
              src="/images/Cat2.svg"
              alt="Formal"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute top-2 left-2 p-2 flex justify-center items-center">
              <MyButton name={"Formal"} />
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative col-span-2 w-full h-[300px] overflow-hidden">
            <Image
              src={"/images/Cat3.svg"}
              alt="Party"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute top-2 left-2 p-2 flex justify-center items-center">
              <MyButton name={"Party"} />
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={"/images/Cat4.svg"}
              alt="Gym"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute top-2 left-2 p-2 flex justify-center items-center">
              <MyButton name={"Gym"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
