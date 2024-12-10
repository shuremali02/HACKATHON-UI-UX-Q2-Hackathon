import React from "react";
import { HiAdjustments } from "react-icons/hi";
import TestimonialsCards, { TestimonialsProp } from "./TestimonialsCards";
import { Button } from "@/components/ui/button";
import YouMight from "./YouMightPro";

export default function ProductTestimonial() {
  const Test: TestimonialsProp[] = [
    {
      description:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      name: "Samantha D.",
      title: "Posted on August 14, 2023",
    },
    {
      description:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      name: "Alex M.",
      title: "Posted on August 15, 2023",
    },
    {
      description:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      name: "Ethan R.",
      title: "Posted on August 16, 2023",
    },
    {
      description:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      name: "Olivia P.",
      title: "Posted on August 17, 2023",
    },
    {
      description:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      name: "Olivia P.",
      title: "Posted on August 17, 2023",
    },
    {
      description:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      name: "Olivia P.",
      title: "Posted on August 17, 2023",
    },
  ];

  return (
    <div className="bg-white py-12 px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            All Reviews (451)
          </h1>
          <div className="flex items-center space-x-4">
            <HiAdjustments size={24} className="text-gray-600" />
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600"
              defaultValue="latest"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Write a Review
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full">
          {/* Horizontal Scroll for Mobile */}
          <div className="sm:block md:hidden overflow-x-auto whitespace-nowrap space-x-4 text-gray-700 text-sm line-clamp-3 overflow-hidden break-words">
            {Test.map((testimonial, index) => (
              <div
                key={index}
                className="inline-block w-[280px] flex-shrink-0 mx-2"
              >
                <TestimonialsCards {...testimonial} />
              </div>
            ))}
          </div>

          {/* Grid for Larger Screens */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mx-auto max-w-6xl">
            {Test.map((testimonial, index) => (
              <TestimonialsCards key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex items-center justify-center mt-8">
        <Button className="p-6 px-9 rounded-none bg-transparent text-Button">
          Load More Reviews
        </Button>
      </div>

      {/* You Might Also Like Section */}
      <YouMight />
    </div>
  );
}
