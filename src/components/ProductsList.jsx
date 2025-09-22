import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ image, title, price, oldPrice, discount, hot }) => {
  return (
    <div className="w-[328px] h-[408px] border-[3px] border-[#F6F7F8] rounded-md bg-white relative overflow-hidden flex flex-col items-center mt-0 ">
      {/* HOT Badge */}
      
        <div className="absolute top-0 left-0 bg-[#FF4858] flex items-center justify-center rounded px-3 py-1 w-[70px] h-[35px]">
          <span className="font-[Proxima Nova] text-[18px] text-white leading-[100%]">HOT</span>
        </div>
      

      {/* Product Image */}
      <div className="w-[326px] h-[400px] flex  justify-center rounded-[5px] items-center overflow-hidden ">
        <img src={image} alt={title} className="w-full h-ull object-contain  pb-12" />
      </div>

      {/* Title */}
      <span className="mt-3 font-poppins font-bold text-lg leading-[150%] tracking-wide text-[#223263] text-center">
        {title}
      </span>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mt-2">
        <FaStar className="text-[#FFC600] w-4 h-4" />
        <FaStar className="text-[#FFC600] w-4 h-4" />
        <FaStar className="text-[#FFC600] w-4 h-4" />
        <FaStar className="text-[#FFC600] w-4 h-4" />
        <FaStar className="text-[#C1C8CE] w-4 h-4" />
      </div>

      {/* Prices */}
      <div className="flex items-center justify-center gap-2 mt-3 mb-5 ">
        <span className="text-[#40BFFF] font-poppins font-bold text-lg tracking-wide">
          {price}
        </span>
        <span className="text-[#9098B1] font-poppins text-sm font-normal tracking-wide line-through">
          {oldPrice}
        </span>
        <span className="text-[#FB7181] font-poppins text-sm font-bold tracking-wide">
          {discount}
        </span>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const products = [
    {
      image: "./product1.png",
      title: "Nike Air Max 270 React",
      price: "$299,43",
      oldPrice: "$534,33",
      discount: "24% Off",
      hot: true,
    },
    {
      image: "./product3.png",
      title: "Adidas Ultraboost",
      price: "$250,00",
      oldPrice: "$400,00",
      discount: "20% Off",
      hot: false,
    },
    {
      image: "./product2.png",
      title: "Puma RS-X",
      price: "$199,99",
      oldPrice: "$300,00",
      discount: "30% Off",
      hot: false,
    },
    {
      image: "./product1.png",
      title: "Converse Chuck 70",
      price: "$120,00",
      oldPrice: "$180,00",
      discount: "15% Off",
      hot: true,
    },
    {
      image: "./product3.png",
      title: "Vans Old Skool",
      price: "$90,00",
      oldPrice: "$150,00",
      discount: "40% Off",
      hot: false,
    },
    {
      image: "./product2.png",
      title: "Reebok Classic",
      price: "$110,00",
      oldPrice: "$160,00",
      discount: "25% Off",
      hot: false,
    },
  ];

  return (
    <div className="mt-10 space-y-9">
      {/* Row 1 */}
      <div className="flex justify-center items-center space-x-9">
        {products.slice(0, 3).map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      {/* Row 2 */}
      <div className="flex justify-center items-center space-x-9">
        {products.slice(3, 6).map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
