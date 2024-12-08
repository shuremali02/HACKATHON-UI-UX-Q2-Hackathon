import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@mui/material";
import Image from "next/image";

export interface RowPropType {
  index: number;
  image: string;
  product: string;
  price: number;
  subtotal: number;
}

export default function Cart() {
  const images: RowPropType[] = [
    {
      index: 1,
      image: "/images/Monitor-Cart.svg",
      product: "LCD Monitor",
      price: 650,
      subtotal: 650,
    },
    {
      index: 2,
      image: "/images/wishlist7.svg",
      product: "H1 Gamepad",
      price: 600,
      subtotal: 600,
    },
    {
        index: 2,
        image: "/images/wishlist7.svg",
        product: "H1 Gamepad",
        price: 600,
        subtotal: 600,
      },
    
  ];

  return (
    <div className="max-w-7xl w-full mx-auto p-6 space-y-6">
      {/* Cart and Total Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Table */}
        <div className="flex-1 bg-white rounded-lg shadow overflow-hidden">
          {/* Table Header */}
          <div className="flex border-b bg-gray-100 py-4 px-6">
            {["#", "Product", "Price", "Quantity", "Subtotal"].map((header, idx) => (
              <div key={idx} className={`flex-1 text-left font-medium text-gray-700`}>
                {header}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div>
            {images.map((item) => (
              <CartRow key={item.index} {...item} />
            ))}
          </div>
        </div>

        {/* Card Total */}
        <div className="w-full lg:w-1/3">
          <Card className="rounded-lg border border-gray-300 shadow">
            <CardHeader className="bg-gray-100 py-4">
              <CardTitle className="text-lg font-bold text-gray-800">Cart Total</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6">
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <p className="text-gray-600">Subtotal:</p>
                <p className="text-gray-800 font-medium">$1750</p>
              </div>
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <p className="text-gray-600">Shipping:</p>
                <p className="text-gray-800 font-medium">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Total:</p>
                <p className="text-gray-800 font-bold">$1750</p>
              </div>
            </CardContent>
            <CardFooter className="px-6 py-4">
              <Button
                variant="contained"
                color="primary"
                className="w-full py-2 text-white text-sm font-medium"
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CartRow({ index, image, product, price, subtotal }: RowPropType) {
  return (
    <div className="flex items-center border-b py-4 px-6 hover:bg-gray-50">
      {/* Index */}
      <div className="flex-1 text-gray-500">{index}</div>

      {/* Product Details */}
      <div className="flex-1 flex gap-4 items-center">
        <Image
          src={image || "/placeholder-image.png"}
          alt="product"
          width={54}
          height={54}
          className="rounded shadow"
        />
        <p className="text-gray-800 font-medium">{product}</p>
      </div>

      {/* Price */}
      <div className="flex-1 text-gray-800">${price.toFixed(2)}</div>

      {/* Quantity */}
      <div className="flex-1">
        <input
          type="number"
          defaultValue={1}
          min={1}
          className="w-16 border rounded px-2 py-1 text-center"
        />
      </div>

      {/* Subtotal */}
      <div className="flex-1 text-gray-800">${subtotal.toFixed(2)}</div>
    </div>
  );
}
