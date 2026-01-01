"use client";
import React from "react";
import shop from "../../../../public/db/shop.json";
import category from "../../../../public/db/category.json";
import AllCard from "@/components/molecules/ExamCategoryCard";
import { IoIosArrowUp } from "react-icons/io";
import CourseCard from "@/components/molecules/CourseCard";
import Link from "next/link";

const Category = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-11 container mx-auto">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-10 lg:gap-30 w-full">
        <div
          className="
            w-full
            md:w-[260px]
            lg:w-[377px]
            border-2
            h-auto
            lg:h-[600px]
            flex
            flex-col
            gap-4
          "
        >
          <div className="flex justify-between items-center border-b px-4 sm:px-5 py-3 sm:py-4">
            <h2 className="font-urbanist font-medium text-[#1C2B38] text-[15px] sm:text-[17px]">
              Category
            </h2>
            <IoIosArrowUp className="text-black" />
          </div>
          <div className="overflow-y-auto lg:overflow-visible space-y-3">
            {category.map((cat) => (
              <AllCard key={cat.id} title={cat.title} />
            ))}
          </div>

          <p className="font-urbanist ml-4 font-bold text-[15px] text-[#2E3192]">
            +4 more
          </p>
          <div className="flex justify-between items-center border-t border-b px-4 sm:px-5 py-4">
            <h2 className="font-urbanist font-medium text-[#1C2B38] text-[15px] sm:text-[16px]">
              Price
            </h2>
            <IoIosArrowUp className="text-black" />
          </div>
          <div className="mt-3 px-4 pb-4">
            <div className="relative w-full h-2 bg-[#1D1E40] rounded-full">
              <div className="absolute -top-1 left-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
              <div className="absolute -top-1 right-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
            </div>
            <p className="mt-3 text-[#1C2B38] font-urbanist text-[15px]">
              ₹1 - ₹5000
            </p>
          </div>
        </div>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-3
            space-y-15
            gap-4
            sm:gap-5
            flex-1
            mb-10
          "
        >
          {shop.map((item) => (
            <Link key={item.id} href="order" className="flex justify-center">
              <CourseCard
                img={item.img}
                title={item.title}
                price={item.price}
                mrp={item.mrp}
                rating={item.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
