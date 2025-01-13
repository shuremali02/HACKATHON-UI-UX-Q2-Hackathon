import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-9">
      {/* Newsletter Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center py-9 md:py-11 px-6 md:px-16 max-w-7xl mx-auto bg-black rounded-[20px]">
        <p className="font-bold text-[24px] md:text-[40px] text-white mb-6 md:mb-0 leading-tight">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex justify-center md:justify-end items-center">
          <div className="flex flex-col w-full max-w-md">
            <div className="flex items-center bg-white px-4 py-2 mb-4 rounded-full shadow-md">
              <HiOutlineMail size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent placeholder-gray-500 text-sm focus:outline-none"
              />
            </div>
            <Button
              variant="secondary"
              className="text-sm font-medium bg-white text-black h-12 rounded-full shadow-md"
              aria-label="Subscribe to Newsletter"
              type="button"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <Image
              src="/images/SHOP.CO.svg"
              alt="Logo"
              width={160}
              height={22}
              className="w-[100px] h-auto md:w-[160px] mx-auto md:mx-0"
            />
            <p className="text-sm mt-4">
              We have clothes that suit your style and which you&339;re proud to wear. From women to men.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4 text-xl">
              <FaFacebookF />
              <CiTwitter />
              <FaInstagram />
              <TiSocialLinkedin />
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">FAQ</h4>
            <ul className="space-y-2 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-sm space-y-4 md:space-y-0">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-4">
            <div className='w-12 h-8'>
              <Image src="/images/Badge (1).svg" alt="Visa" width={52} height={40} />
            </div>
            <div className='w-12 h-8'>
              <Image src="/images/Badge (2).svg" alt="PayPal" width={52} height={40} />
            </div>
            <div className='w-12 h-8'>
              <Image src="/images/Badge (3).svg" alt="Apple Pay" width={52} height={40} />
            </div>
            <div className='w-12 h-8'>
              <Image src="/images/Badge (4).svg" alt="Apple Pay" width={52} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}