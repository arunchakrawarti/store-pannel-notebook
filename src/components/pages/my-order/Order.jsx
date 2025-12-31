import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Order = () => {
  return (
    <div className="pt-37 px-4 sm:px-6 md:px-10 lg:px-16  ml-5 overflow-hidden">
      <h1 className="font-inter font-semibold text-black text-[22px]">
        My Orders
      </h1>
      <div className="flex flex-col lg:flex-row  mt-8">
        <div className="w-full max-w-[250px]">
          <div className="flex items-center border border-gray-300 bg-[#E0EAFE] 
                          rounded-md  justify-between text-black px-3 py-2">
            <h2 className="font-poppins  font-medium text-[15px] leading-[22px]">
              All Orders
            </h2>
            <IoIosArrowDown />
          </div>

          <div className="bg-[#E0EAFE] w-full text-black  mt-5 space-y-4 rounded-md pt-2 px-3">
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
                className="font-inter font-normal text-[13px] border-b pb-2 leading-[100%]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center lg:ml-[-60px] justify-center mt-30 w-full">
          <div className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] ">
            <Image
              src="/img/Card.png"
              height={522}
              width={522}
              alt="order.png"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="font-inter font-semibold text-[20px] text-black text-center mb-10">
            No Order
          </p>
        </div>

      </div>
    </div>
  );
};

export default Order;
