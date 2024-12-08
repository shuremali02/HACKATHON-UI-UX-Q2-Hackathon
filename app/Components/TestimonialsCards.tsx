import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";

export interface TestimonialsProp {

  description: string;
  name: string;
}

export default function TestimonialsCard({
  description,
  name,
}: TestimonialsProp) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md border border-gray-400 rounded-lg shadow-md p-6">
        {/* Star Ratings */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <IoMdStar key={index} className="text-yellow-500" size={20} />
          ))}
        </div>

        {/* User Information */}
        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <MdOutlineVerifiedUser size={20} className="text-green-500" />
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="text-gray-600 text-sm break-words">
            "{description}"
          </p>
        </div>
      </div>
    </div>
  );
}
