"use client";
import React from 'react'

import HeroSecBanner from './Components/HeroSec-Banner'

import NewArrivals from './Components/HomePage/NewArrivals';
import TopSelling from './Components/HomePage/TopSelling';
import Testimonial from './Components/HomePage/Testimonials';


export default function HomePage() {
  return (
    <div>

      <HeroSecBanner />
      <NewArrivals />
      <TopSelling />
      <Testimonial />
    

    </div>
  )
}
