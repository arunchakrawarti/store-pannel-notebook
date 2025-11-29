"use client";
import React from "react";
import shop from "../../../../public/db/shop.json";
import category from "../../../../public/db/category.json";
import AllCard from "@/components/molecules/AllCard";
import { IoIosArrowUp } from "react-icons/io";
import Card1 from "@/components/molecules/Card1";
import Link from "next/link";

const Category = () => {
  return (
    <div className="mt-5 w-full px-4 sm:px-6 md:px-8 lg:px-16 pb-10">
      <div className="flex flex-col md:flex-row flex-wrap gap-15 lg:gap-25 w-full">
        <div
          className="
          w-full 
          md:min-w-[220px] 
          md:max-w-[240px]
          flex-shrink-0 
          flex 
          flex-col 
          gap-4
        "
        >
          <div className="flex justify-between rounded-md items-center border px-3 py-2 border-gray-300">
            <h2 className="font-urbanist font-medium text-[16px]">Category</h2>
            <IoIosArrowUp />
          </div>

          {category.map((cat) => (
            <AllCard key={cat.id} title={cat.title} />
          ))}

          <p className="font-urbanist font-bold text-[14px] text-[#2E3192]">
            +4 more
          </p>

          <div className="flex justify-between rounded-md items-center border px-3 py-2 border-gray-300">
            <h2 className="font-urbanist font-medium text-[16px]">Price</h2>
            <IoIosArrowUp />
          </div>

          <div className="mt-3">
            <div className="relative w-full h-2 bg-[#1D1E40] rounded-full">
              <div className="absolute -top-1 left-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
              <div className="absolute -top-1 right-0 h-4 w-4 bg-white border-[3px] border-[#1D1E40] rounded-full"></div>
            </div>

            <p className="mt-2 font-urbanist text-[14px]">₹1 - ₹5000</p>
          </div>
        </div>

        <div
          className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-5
          flex-1
        "
        >
          {shop.map((item) => (
            <Link href="order">
              <Card1
                key={item.id}
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
