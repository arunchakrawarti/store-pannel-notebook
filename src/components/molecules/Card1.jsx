import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Card1 = ({ img, title, price, mrp, rating }) => {
  return (
    <div className="min-w-[290px] max-w-[370px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300">
      {/* Image */}
      <div className="w-full flex justify-center h-60 bg-[#F6F7FB]">
        <Image
          src={img}
          height={150}
          width={170}
          alt="product"
          className="object-contain"
        />
      </div>

      {/* <div className="w-full h-60 bg-[#F6F7FB] relative overflow-hidden rounded-t-xl">
  <Image
    src={img}
    alt="product"
    fill
    className="object-cover"
  />
</div> */}


      <div className="p-4">
        <h2 className=" font-urbanist font-bold text-[14px] leading-[20px] text-[#2E3192]">
        {title}
      </h2>
      <div className="flex items-center gap-1 mt-1">
        <FaStar className="text-yellow-500 text-[14px]" />
        <FaStar className="text-yellow-500 text-[14px]" />
        <FaStar className="text-yellow-500 text-[14px]" />
        <FaStar className="text-yellow-500 text-[14px]" />
        <FaStar className="text-yellow-500 text-[14px]" />
      </div>

      <div className="flex items-center gap-2 mt-2">
        <p className="text-gray-400 line-through text-[13px]">₹{mrp}</p>
        <p className="text-[#151875] font-urbanist font-normal text-[14px] leading-[20px] align-middle">
          ₹{price}
        </p>
        <p className="text-green-600 font-urbanist font-medium text-[14px] leading-[20px] align-middle">
          Save ₹{mrp - price}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Card1;
