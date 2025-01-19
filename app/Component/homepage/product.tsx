
import JustForYou from "../card";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";

async function ProductSection() {
  
 
      const data:WatchesXPerfumes[] = await DataFetching(); // Fetch data on the server side
      const product:WatchesXPerfumes[] =data.slice(0,8)
     
  // const homePage = [
  //   {
  //     id: 1,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-1.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 2,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-2.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 3,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-3.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 4,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-4.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 5,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-8.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 6,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-6.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 7,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-7.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  //   {
  //     id: 8,
  //     priceStrikeThrough: 350,
  //     image: "/images/product-cover-8.svg",
  //     title: "Graphic Design",
  //     description: "English Department",
  //     price: 450,
  //   },
  // ];
  return (
    <div className="w-full py-9">
      <div className="flex flex-col items-center md:justify-center">
        <div className="mb-8 flex flex-col w-full text-center md:max-w-[463px]">
          <p>Featured Products</p>
          <h1 className="font-bold text-Text2 text-2xl sm:text-3xl md:text-4xl">BESTSELLER PRODUCTS</h1>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 px-4
          "
        >
          {product.map((product, index) => (
            <JustForYou key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
