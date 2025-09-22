import React, { useState } from "react";

const Sidebar = () => {
  // Deals Data
  const deals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48, active: true },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  // Colors Data
  const colors = [
    { name: "blue", code: "bg-blue-500" },
    { name: "red", code: "bg-red-500" },
    { name: "black", code: "bg-black" },
    { name: "yellow", code: "bg-yellow-400" },
    { name: "pink", code: "bg-pink-500" },
    { name: "beige", code: "bg-pink-100" },
  ];

  // Brands Data
  const brands = [
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];

  // States
  const [min, setMin] = useState(13.99);
  const [max, setMax] = useState(25.99);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [activeBrand, setActiveBrand] = useState("Nike");

  return (
    <div className="   w-[355px] h-[1385px] bg-white rounded-xl  space-y-8  p-6 mt-1 ">
      {/* Hot Deals */}
      <div className= "  w-[349.23px]  h-[548.57px] s  bg-[#F6F7F8]   rounded-l p-4 mt-0">
        <h6 className="text-[20px] font-medium font-[Poppins] mb-9">
          Hot Deals
        </h6>
        <ul className="space-y-10">
          {deals.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center font-[Proxima Nova]"
            >
              <span
                className={`text-[18px] ${
                  item.active ? "text-[#33A0FF]" : "text-[#262626]"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`text-[18px] ${
                  item.active ? "text-[#33A0FF]" : "text-[#22262A]/70"
                }`}
              >
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prices */}
      <div className="bg-[#F6F7F8] rounded-l p-4 w-[347px] h-[190px] ">
        <h6 className="text-[20px] font-medium font-[Poppins] text-[#22262A] mb-4  ">
          PRICES
        </h6>
        <div className="flex justify-between mb-3 space-y-7">
          <span className="text-[#262626] font-[Proxima Nova] text-[18px]">
            Range:
          </span>
          <span className="text-[#22262A] font-[Proxima Nova] text-[18px]">
            ${min.toFixed(2)} - ${max.toFixed(2)}
          </span>
        </div>

        {/* Double Thumb Slider */}
        <div className="relative w-full ">
          {/* track highlight */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded"
            style={{
              left: `${((min - 10) / (50 - 10)) * 100}%`,
              right: `${100 - ((max - 10) / (50 - 10)) * 100}%`,
            }}
          />
          {/* min thumb */}
          <input
            type="range"
            min="10"
            max="50"
            step="0.5"
            value={min}
            onChange={(e) =>
              setMin(Math.min(parseFloat(e.target.value), max - 1))
            }
            className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded-lg appearance-none pointer-events-auto
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-blue-500
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-white
              [&::-webkit-slider-thumb]:cursor-pointer"
          />
          {/* max thumb */}
          <input
            type="range"
            min="10"
            max="50"
            step="0.5"
            value={max}
            onChange={(e) =>
              setMax(Math.max(parseFloat(e.target.value), min + 1))
            }
            className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded-lg appearance-none pointer-events-auto
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-blue-500
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-white
              [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>

      {/* Color Filter */}
      <div className="bg-[#F6F7F8] w-[347px] h-[144px] rounded-l p-4">
        <h6 className="w-fit px-3 py-1 text-[#22262A] font-poppins font-medium text-[20px] mb-4">
          COLOR
        </h6>
        <div className="flex flex-wrap gap-3">
          {colors.map((c, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(c.name)}
              className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                selectedColor === c.name
                  ? "border-[#006CFF]"
                  : "border-gray-300"
              }`}
            >
              <span className={`w-4 h-4 rounded ${c.code}`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="bg-[#F6F7F8] rounded-l p-4 w-[347px] h-[303px] ">
        <h6 className="text-[18px] font-medium font-[Poppins] mb-6  space-y-10">
          BRAND
        </h6>
        <ul className="space-y-11">
          {brands.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center font-[Proxima Nova]"
            >
              <span
                onClick={() => setActiveBrand(item.name)}
                className={`cursor-pointer text-[18px] ${
                  activeBrand === item.name
                    ? "text-[#33A0FF]"
                    : "text-[#262626]"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`text-[16px] ${
                  activeBrand === item.name
                    ? "text-[#33A0FF]"
                    : "text-gray-400"
                }`}
              >
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* More Section */}
      <div className="bg-[#F6F7F8] rounded-l w-[350px] h-[69px] p-4">
        <h6 className="text-[16px] font-semibold font-[Poppins]">MORE</h6>
      </div>
    </div>
  );
};

export default Sidebar;   