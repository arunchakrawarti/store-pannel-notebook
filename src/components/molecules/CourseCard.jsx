"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ img, title, price, mrp, rating = 5, imageFit = "contain" }) => {
  const [isPoster, setIsPoster] = useState(false);

  return (
    <div
      className=" w-full sm:w-[270px] md:w-[250px] lg:w-[275px] bg-white rounded-xl border  border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col
      "
    >
      <div
        className="relative w-full aspect-[4/3] bg-[#F6F7FB] rounded-t-xl overflow-hidden flex items-center justify-center
        "
      >
        <Image
          src={img}
          alt={title}
          fill
          onLoadingComplete={(img) => {
            if (img.naturalHeight > img.naturalWidth * 1.2) {
              setIsPoster(true);
            }
          }}
          className={
            "transition-all duration-300 " +
            (imageFit === "cover"
              ? "object-cover w-full h-full"
              : isPoster
                ? "object-contain h-full w-auto"
                : "object-contain max-h-full max-w-full p-6 sm:p-8 md:p-10 lg:p-12")
          }
          style={{ objectPosition: "center center" }}
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 flex-grow">
        <h2
          className="font-urbanist font-bold text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] text-[#2E3192]  line-clamp-3
          "
        >
          {title}
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar
              key={i}
              className="text-yellow-500 text-[13px] sm:text-[14px] lg:text-[15px]"
            />
          ))}
        </div>


        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-auto">
          <p className="text-gray-400 line-through text-[12px] sm:text-[13px] lg:text-[14px]">
            ₹{mrp}
          </p>

          <p className="text-[#151875] font-urbanist font-semibold text-[13px] sm:text-[14px] lg:text-[15px]">
            ₹{price}
          </p>

          <p className="text-green-600 font-urbanist text-[12px] sm:text-[13px] lg:text-[15px]">
            Save ₹{mrp - price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
