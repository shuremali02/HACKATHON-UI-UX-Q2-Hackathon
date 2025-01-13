import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  altText,
  title,
  size,
  color,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-white rounded shadow">
      <div className="flex items-center space-x-4">
        <Image
          src={imageSrc}
          alt={altText}
          height={124}
          width={124}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-sm text-gray-500">Size: {size} | Color: {color}</p>
          <p className="text-md font-bold">${price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => onQuantityChange(quantity - 1)}
        >
          -
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          +
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={onRemove}
        >
         < RiDeleteBin6Line size={22}/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
