import React from "react";
import { FaThLarge, FaBars } from "react-icons/fa"; // grid & list icons

export default function ProductToolbar() {
  return (
    <div className="w-full flex justify-center "> 
      {/* Container Centered */}
      <div className="font-poppine ml-0 mr-50 h-[62.57px] w-[850px]  flex items-center justify-between bg-[#F6F7F8] px-6 py-3 rounded-l">
        
        {/* Left Side: Item count */}
        <div className="text-gray-700 text-sm font-medium">13 Items</div>

        {/* Middle: Sort & Show */}
        <div className="flex items-center gap-4">
          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Sort By</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
              <option>Name</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Show */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Show</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
              <option>12</option>
              <option>24</option>
              <option>36</option>
            </select>
          </div>
        </div>

        {/* Right Side: View Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <button className="p-2 border rounded hover:bg-gray-100">
            <FaThLarge />
          </button>
          <button className="p-2 border rounded hover:bg-gray-100">
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}
