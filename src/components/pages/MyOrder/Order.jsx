import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Order = () => {
  return (
    <div className="pt-37 px-4 sm:px-6 md:px-10 lg:px-16 mb-10 overflow-hidden">

     
      <h1 className="font-inter font-semibold text-[20px] leading-[100%]  md:text-left">
        My Orders
      </h1>

     
      <div className="flex mt-5 items-center border border-gray-300 bg-[#E0EAFE] 
                      rounded-md w-full max-w-[220px] justify-between px-3 py-2">
        <h2 className="font-poppins font-medium text-[14px] leading-[22px]">
          All Orders
        </h2>
        <IoIosArrowDown />
      </div>

      <div className="bg-[#E0EAFE] w-full max-w-[220px] mt-3 space-y-3 rounded-md pt-2 px-3">
        {[
          "All Orders",
          "Orders Received",
          "Confirmed",
          "On The Way",
          "Rejected",
          "Canceled",
          "Return",
          "Delivered",
        ].map((item, index) => (
          <p
            key={index}
            className="font-inter font-normal text-[12px] border-b pb-2 leading-[100%]"
          >
            {item}
          </p>
        ))}
      </div>

    
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-16">
        
        <div className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px]">
          <Image
            src="/img/orders.png"
            height={522}
            width={522}
            alt="order.png"
            className="w-full h-auto object-contain"
          />
        </div>

        <p className="font-inter font-semibold text-[20px] leading-[100%] text-center">
          No Order
        </p>
      </div>
    </div>
  );
};

export default Order;
