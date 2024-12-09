"use client";
import React from 'react'

import HeroSecBanner from './Components/HeroSec-Banner'

import NewArrivals from './Components/HomePage/NewArrivals';
import TopSelling from './Components/HomePage/TopSelling';
import Testimonial from './Components/HomePage/Testimonials';
import LogoSec from './Components/Logo';
import CategoryBanner from './Components/CategoryBanner';


export default function HomePage() {
  return (
    <div>

      <HeroSecBanner />

       <div className="">
        <LogoSec />
      </div>
      <NewArrivals />
      <TopSelling />
      <CategoryBanner/>
      <Testimonial />
    

    </div>
  )
}
