import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TestimonialsCards, { TestimonialsProp } from "../TestimonialsCards";

export default function Testimonial() {
  const Test: TestimonialsProp[] = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "James Nduku",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Erick Kipkemboi",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Stephen Kerubo",
    },
  ];

  return (
    <div className="text-left py-12 px-8 bg-white">
      <h1 className="font-bold text-4xl mb-4 font-[Roboto]">
        Customer testimonials
      </h1>
      <div className="flex justify-end items-end gap-x-2 md:mx-auto md:px-3 max-w-6xl md:ml-3 mb-6">
        <div className="h-12 w-12 rounded-full border border-text flex justify-center items-center">
          <FaArrowLeft size={28} />
        </div>
        <div className="h-12 w-12 rounded-full border border-text flex justify-center items-center">
          <FaArrowRight size={28} />
        </div>
      </div>
      <div className="flex items-center py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mx-auto max-w-6xl">
          {Test.map((testimonial, index) => (
            <TestimonialsCards key={index} {...testimonial} />
          ))}
        </div>
      </div>
      {/* Mobile View Adjustments */}
      <div className="block sm:hidden">
        {Test.slice(0, 1).map((testimonial, index) => (
          <TestimonialsCards key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
