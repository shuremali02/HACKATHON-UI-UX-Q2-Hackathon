import React from "react";
import Image from "next/image";

export default function LogoSec() {
  return (
    <div className="flex items-center justify-center bg-black py-11 mx-auto">
      <div className="w-full max-w-[390px] md:max-w-7xl flex flex-wrap items-center justify-center ">
        {/* Logo container */}
        {[
          { src: "/images/versace.svg", alt: "Versace", width: 130, height: 43 },
          { src: "/images/zara-logo.svg", alt: "Zara", width: 88, height: 28 },
          { src: "/images/gucci-logo.svg", alt: "Gucci", width: 130, height: 43 },
          { src: "/images/prada-logo.svg", alt: "Prada", width: 194, height: 43 },
          { src: "/images/calvine.svg", alt: "Calvin", width: 130, height: 43 },
        ].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center  h-[38px] sm:w-[30%] md:w-auto"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
