"use client";
import React, { useRef } from "react";
import productData from "../../../../public/db/productData.json";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Card1 from "../../molecules/Card1";
import Link from "next/link";
import { Button } from "@/components/comman/Button";

const Treading = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-6 md:px-2 py-10 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-urbanist font-bold text-[24px] leading-[32px] align-middle">
          Trending Products
        </h1>

        <div className="flex gap-3">
          <button onClick={scrollLeft}>
            <FaRegArrowAltCircleLeft className="h-10 w-10 cursor-pointer text-[#2E3192]" />
          </button>
          <button onClick={scrollRight}>
            <FaRegArrowAltCircleRight className="h-10 w-10 cursor-pointer text-[#2E3192]" />
          </button>
        </div>
      </div>

     
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}</style>

    
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth mt-5"
      >
        {productData.map((item) => (
          <Link href='order'>
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
      <div className="flex mt-3 justify-end">
        <Button>View All</Button>
      </div>
    </div>
  );
};

export default Treading;
