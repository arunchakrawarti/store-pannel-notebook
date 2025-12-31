"use client";
import React, { useRef, useEffect } from "react";
import Card from "../../molecules/CategoryCard";
import courseData from "../../../../public/db/courseData.json";
import Link from "next/link";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";


const Exam = () => {
  const scrollRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxScroll =
        container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        directionRef.current = -1;
      } else if (container.scrollLeft <= 0) {
        directionRef.current = 1;
      }

      container.scrollBy({
        left: 2 * directionRef.current,
        behavior: "smooth",
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-38 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-urbanist font-bold text-[24px] text-[#3D2F2F]">
          Browse By Categories
        </h1>
        <div className="flex gap-3">
          <button>
            <IoArrowBackCircleOutline className="h-13 w-13 cursor-pointer text-[#BFB7F2]" />
          </button>
          <button>
            <IoArrowForwardCircleOutline className="h-13 w-13 cursor-pointer text-[#BFB7F2]" />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div
        ref={scrollRef}
        className="
          flex gap-6 mt-5 py-4
          overflow-hidden
          no-scrollbar
          pointer-events-none
        "
      >
        {courseData.map((item, i) => (
          <div key={i} className="shrink-0">
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
