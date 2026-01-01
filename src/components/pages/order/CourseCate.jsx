"use client";
import React, { useRef } from "react";
import relate from "../../../../public/db/relate.json";
import CourseCard from "../../molecules/CourseCard";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const CourseCate = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-urbanist font-bold text-[24px] align-middle text-[#3D2F2F]">
          Related Products
        </h1>

        <div className="flex gap-3">
          <button onClick={scrollLeft}>
            <IoArrowBackCircleOutline className="h-13 w-13 cursor-pointer text-[#BFB7F2]" />
          </button>
          <button onClick={scrollRight}>
            <IoArrowForwardCircleOutline className="h-13 w-13 cursor-pointer text-[#BFB7F2]" />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}</style>

      <div
        ref={scrollRef}
        className="flex gap-6 mt-5 mb-10"
      >
        {relate.map((item) => (
          <CourseCard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            mrp={item.mrp}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCate;
