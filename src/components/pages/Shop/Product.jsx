import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Product = () => {
  return (
    <div className="pt-20 pt-33 px-4 sm:px-6 md:px-10 lg:px-15">
      
     
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">

       
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <h2 className="font-urbanist font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
            All Products
          </h2>

          <p className="font-urbanist font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-gray-600">
            (Showing 50 Products)
          </p>
        </div>

    
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <h2 className="font-urbanist font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
            Sort By:
          </h2>

          <div className="flex border border-gray-300 rounded-md items-center px-3 py-2 gap-3 cursor-pointer hover:bg-gray-50 transition">
            <button className="font-urbanist font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center">
              Latest
            </button>
            <IoIosArrowDown className="text-gray-700" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
