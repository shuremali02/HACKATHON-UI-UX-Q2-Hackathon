// // // import { Button } from "@/components/ui/button";
// // // import ButtonComponent from "../Button/Button";
// // // import Image from "next/image";

// // // export default function CategoryBanner() {
// // //     return (
// // //       <div className="max-w-7xl mx-auto w-full py-7 text-text ">
// // //         <div className=" flex justify-between gap-6 p-7 ">
// // //             <h1 className="font-bold ">FIND CLOTHES THAT MATCHES YOUR STYLE </h1>
// // //             <p>Browse through our deverse range of meticulously crafted garments. designed to bring out your individuality and cater to sense your style </p>
// // //             <div>
// // //                 <Button></Button>
// // //             </div>
// // //           <div className="w-1/2 flex flex-col gap-5">

// // //             <div className="flex gap-5 text-Button">
// // //               <div className="w-16 h-16 bg-Primary  flex flex-col items-center justify-center">
// // //                 <p className="font-semibold">23</p>
// // //                 <p className="text-xs">Hours</p>
// // //               </div>
// // //               <div className="w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center">
// // //                 <p className="font-semibold">59</p>
// // //                 <p className="text-xs">Minutes</p>
// // //               </div>
// // //               <div className="w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center">
// // //                 <p className="font-semibold">35</p>
// // //                 <p className="text-xs">Seconds</p>
// // //               </div>
// // //             </div>
// // //             <div className="mt-4">
// // //               <ButtonComponent text={"Buy Now!"} color="green" padding="px-14 py-4" />
// // //             </div>
// // //           </div>
// // //           <div className="w-1/2">
// // //             <Image src="/images/Category.svg" alt="Frame Image" width={600} height={420} className="shadow shadow-Text border-transparent"/>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }


// // import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// // import LogoSec from "./Logo";

// // export default function HeroSecBanner() {
// //   return (
// //     <div className="h-screen max-w-7xl mx-auto w-full py-10 px-5 text-black">
// //       <div className="flex flex-wrap justify-between items-center">
// //         {/* Left Section: Text Content */}
// //         <div className="w-full lg:w-1/2 space-y-6">
// //           <h1 className="text-4xl font-extrabold leading-snug">
// //             FIND CLOTHES THAT MATCHES YOUR STYLE
// //           </h1>
// //           <p className="text-lg text-gray-600">
// //             Browse through our diverse range of meticulously crafted garments,
// //             designed to bring out your individuality and cater to your sense of style.
// //           </p>
// //           <div>
// //             <Button className="bg-black text-white px-6 py-3 rounded-lg">
// //               Shop Now
// //             </Button>
// //           </div>
// //           {/* Statistics Section */}
// //           <div className="flex space-x-10 mt-6">
// //             <div className="text-center">
// //               <p className="text-2xl font-bold">200+</p>
// //               <p className="text-sm text-gray-500">International Brands</p>
// //             </div>
// //             <div className="text-center">
// //               <p className="text-2xl font-bold">2,000+</p>
// //               <p className="text-sm text-gray-500">High-Quality Products</p>
// //             </div>
// //             <div className="text-center">
// //               <p className="text-2xl font-bold">30,000+</p>
// //               <p className="text-sm text-gray-500">Happy Customers</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Section: Image */}
// //         <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
// //           <Image
// //             src="/images/Rectangle 2.svg"
// //             alt="Fashion Banner"
// //             width={500}
// //             height={400}
// //             className="object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* Brand Logos */}
// //      <LogoSec/>
      
// //     </div>
// //   );
// // }
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import LogoSec from "./Logo";

// export default function HeroSecBanner() {
//   return (
//     <div className="h-screen max-w-[1440px] bg-gray-100 mx-auto w-full py-10 px-5 text-black flex flex-col justify-between overflow-hidden">
//       {/* Main Content */}
//       <div className="flex flex-wrap justify-between items-center h-full">
//         {/* Left Section: Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h1 className="text-4xl font-extrabold leading-snug">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>
//           <p className="text-lg text-gray-600">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <div>
//             <Button className="bg-black text-white px-6 py-3 rounded-lg">
//               Shop Now
//             </Button>
//           </div>
//           {/* Statistics Section */}
//           <div className="flex space-x-10 mt-6">
//             <div className="text-center">
//               <p className="text-2xl font-bold">200+</p>
//               <p className="text-sm text-gray-500">International Brands</p>
//             </div>
//             <div className="text-center">
//               <p className="text-2xl font-bold">2,000+</p>
//               <p className="text-sm text-gray-500">High-Quality Products</p>
//             </div>
//             <div className="text-center">
//               <p className="text-2xl font-bold">30,000+</p>
//               <p className="text-sm text-gray-500">Happy Customers</p>
//             </div>
//           </div>
//         </div>
// {/* Right Section: Image */}
// <div className="w-1/2 h-[663px] lg:w-1/2 relative overflow-hidden flex justify-center">
//   <Image
//     src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdDO3aGizO-wZt5YOgeQ~J6YYZ5VPfIEMLyM1FQtcOLXbkHRhZoDLkxD3IcS6wcRkTLoITyuV6Q9DHHg8C1jH0dC3riWszZeeI1C6~NdZYOHGHg3TCY6vwZHHtAXr1q6dITGpLqdoLnh7wwk5~HvaXn28Q3o~6fJC1TjLeN6p-vPmqU8uxbxbrLDz8McmAqJlR-rODizOep0o9-hk0wI8tA2F2cKWyawKk51pQpqeCFhT2Vy~LMy8x49dM3OqEdoH7GDwaVjXNHNDUISgTHqR5R3aGk7UvDOC2~EgVEiesdJCpR4jmdbZ~YrQQZ9Vxe~-Av7tVaozmJ0GLt15v4uUg__"
//     alt="Fashion Banner"
//     layout="fill" // Ensures the image stretches to cover the container
//     objectFit="cover" // Maintains aspect ratio while covering the container
//     className="absolute"
//   />
// </div>

//       </div>

//       {/* Brand Logos Section */}
//       <div className="mt-10">
//         <LogoSec />
//       </div>
//     </div>
//   );
// }
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoSec from "./Logo";

export default function HeroSecBanner() {
  return (
    <div className="h-screen max-w-[1440px] bg-gray-100 mx-auto w-full py-10 px-5 text-black flex flex-col justify-between overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-wrap justify-between items-center h-full">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <Button className="bg-black text-white px-6 py-3 rounded-lg">
              Shop Now
            </Button>
          </div>
          {/* Statistics Section */}
          <div className="flex space-x-10 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm text-gray-500">International Brands</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">2,000+</p>
              <p className="text-sm text-gray-500">High-Quality Products</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">30,000+</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 h-[663px] relative overflow-hidden flex justify-center">
          <Image
            src="/images/Rectangle 2.svg"
            alt="Fashion Banner"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="mt-10">
        <LogoSec />
      </div>
    </div>
  );
}
