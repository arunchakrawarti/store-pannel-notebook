"use client";
import React, { useRef } from "react";
import Card from "../../molecules/Card";
import courseData from "../../../../public/db/courseData.json";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Link from "next/link";

const Exam = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-6 md:px-2 py-10 max-w-[1440px] mt-25 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-urbanist font-bold text-[24px] leading-[32px]">
          Browse By Categories
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
        className="flex gap-6 overflow-x-auto mt-5 no-scrollbar scroll-smooth py-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {courseData.map((item, i) => (
          <div
            key={i}
            className="min-w-[220px] sm:min-w-[240px] scroll-snap-align-start"
          >
            <Link href="/order">
              <Card img={item.img} title={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exam;
