import React from 'react';

import Image from 'next/image';
import { FaFacebookF, FaInstagram,  } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-9">
      {/* Newsletter Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
        <p className="font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex items-center">
          <div className="flex flex-col max-w-[349px] mx-auto">
            <div className="flex bg-white mb-[14px] rounded-l-md">
              <Image
                priority
                src="/icons/envelope.svg"
                height={20}
                width={20}
                alt="email"
                className="min-w-5 min-h-5 mr-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base"
              />
            </div>
            <Button
              variant="secondary"
              className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
              aria-label="Subscribe to Newsletter"
              type="button"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop.Co</h3>
            <p className="text-sm">We have clothes that suit your style and which you&#39;re proud to wear. From women to men.</p>
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
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex items-center justify-between px-4 md:px-8 text-sm">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4">
            <Image src="/visa.png" alt="Visa" width={36} height={24} />
            <Image src="/paypal.png" alt="PayPal" width={36} height={24} />
            <Image src="/apple-pay.png" alt="Apple Pay" width={36} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
