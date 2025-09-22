import React from "react";

const Pagination = () => {
  return (
    <div className="w-[1008px] h-[69px] mb-3 ml-0 bg-[#F7F7F9] flex items-center justify-center mx-auto mt-10 rounded">
      <div className="flex items-center gap-4">
        {/* Page 1 */}
        <span className="w-[70px] h-[69px] flex items-center justify-center font-[Proxima Nova] text-[18px] text-[#22262A] bg-white cursor-pointer">
          1
        </span>

        {/* Page 2 (dark background) */}
        <span className="w-[70px] h-[69px] flex items-center justify-center font-[Proxima Nova] text-[18px] text-white bg-[#22262A] cursor-pointer">
          2
        </span>

        {/* Page 3 (normal white background) */}
        <span className="w-[70px] h-[69px] flex items-center justify-center font-[Proxima Nova] text-[18px] text-[#22262A] bg-white cursor-pointer">
          3
        </span>

        {/* Page 4 (normal white background) */}
        <span className="w-[70px] h-[69px] flex items-center justify-center font-[Proxima Nova] text-[18px] text-[#22262A] bg-white cursor-pointer">
          4
        </span>

        {/* Page 5 (active blue background) */}
        <span className="w-[70px] h-[69px] flex items-center justify-center font-[Proxima Nova] text-[18px] text-white bg-[#40BFFF] cursor-pointer rounded">
          5
        </span>
      </div>
    </div>
  );
};

export default Pagination;
