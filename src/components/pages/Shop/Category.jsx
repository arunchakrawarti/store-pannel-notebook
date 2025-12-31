"use client";
import React from "react";
import shop from "../../../../public/db/shop.json";
import category from "../../../../public/db/category.json";
import AllCard from "@/components/molecules/ExamCategoryCard";
import { IoIosArrowUp } from "react-icons/io";
import Card1 from "@/components/molecules/CourseCard";
import Link from "next/link";

const Category = () => {
  return (
    <div className="mt-11 container mx-auto">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-30 sm:gap-10 w-full">
        <div
          className="
            w-full 
            md:w-[280px] 
            lg:w-[372px]
            border-2 
            h-[600px] 
            flex flex-col gap-4
          "
        >
          <div className="flex justify-between items-center border-b px-5 py-4">
            <h2 className="font-urbanist font-medium text-[#1C2B38] text-[16px]">
              Category
            </h2>
            <IoIosArrowUp className="text-black" />
          </div>

          {category.map((cat) => (
            <AllCard key={cat.id} title={cat.title} />
          ))}

          <p className="font-urbanist ml-4 font-bold text-[14px] text-[#2E3192]">
            +4 more
          </p>

          <div className="flex justify-between items-center border-t border-b px-5 py-3">
            <h2 className="font-urbanist font-medium text-[#1C2B38] text-[16px]">
              Price
            </h2>
            <IoIosArrowUp className="text-black" />
          </div>

          <div className="mt-3 px-4">
            <div className="relative w-full h-2 bg-[#1D1E40] rounded-full">
              <div className="absolute -top-1 left-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
              <div className="absolute -top-1 right-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
            </div>
            <p className="mt-2 text-[#1C2B38] font-urbanist text-[14px]">
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
            lg:grid-cols-3
            gap-5
            space-y-15 
            flex-1 
            mb-10
          "
        >
          {shop.map((item) => (
            <Link key={item.id} href="order">
              <Card1
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
