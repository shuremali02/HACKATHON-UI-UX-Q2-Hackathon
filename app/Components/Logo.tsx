// import React from 'react'
// import Image from 'next/image'

// export default function LogoSec() {
//   return (
//     <div className='flex items-center'>
//         <div className='bg-black w-full flex-col md:max-w-[1280px] flex md:flex-row py-4 gap- h-[150px] items-center px-4'>
//         <div className='flex flex-row gap-3 '>
//           <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
//             <Image src={"/images/versace.svg"} alt={"item"} height={38} width={123} />
//           </div>
//           <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
//             <Image src={"/images/zara-logo.svg"} alt={"item"} height={28} width={88} />


//           </div>
//           <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
//             <Image src={"/images/gucci-logo.svg"} alt={"item"} height={38} width={123} />

//           </div>
//           <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38] '>
//             <Image src={"/images/prada-logo.svg"} alt={"item"} height={38} width={123} />

//           </div>
//           <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
//             <Image src={"/images/calvine.svg"} alt={"item"} height={38} width={123} />

//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }
import React from 'react';
import Image from 'next/image';

export default function LogoSec() {
  return (
    <div className="flex items-center justify-center bg-black py-11">
      <div className="w-full flex flex-wrap items-center justify-between px-4">
        {/* Logo container */}
        {[
          { src: "/images/versace.svg", alt: "Versace", width: 130, height: 43 },
          { src: "/images/zara-logo.svg", alt: "Zara", width: 88, height: 28 },
          { src: "/images/gucci-logo.svg", alt: "Gucci", width: 130, height: 43 },
          { src: "/images/prada-logo.svg", alt: "Prada", width: 194, height: 3 },
          { src: "/images/calvine.svg", alt: "Calvin", width: 130, height: 43 },
        ].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-md w-[123px] h-[38px] m-3"
          >
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </div>
        ))}
      </div>
    </div>
  );
}

