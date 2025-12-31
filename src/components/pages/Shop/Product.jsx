import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Product = () => {
  return (
    <div className="pt-20 pt-37 container mx-auto">
      
     
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">

       
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <h2 className="font-urbanist font-semibold text-[25px] text-[#2F2E41]">
            All Products
          </h2>

          <p className="font-urbanist font-normal text-[17px] text-[#2F2E41]">
            (Showing 50 Products)
          </p>
        </div>

    
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <h2 className="font-urbanist font-semibold text-[14px] text-black sm:text-[16px] ">
            Sort By:
          </h2>

          <div className="flex border border-gray-300 items-center justify-between gap-44 px-2 py-2">
            <button className="font-urbanist font-medium text-[14px] text-black sm:text-[16px] text-center">
              Latest
            </button>
            <p><IoIosArrowDown className="text-gray-700" /></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
