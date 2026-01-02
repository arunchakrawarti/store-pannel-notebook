"use client";
import React, { useRef } from "react";
import note from "../../../../public/db/note.json";
import CourseCard from "../../molecules/CourseCard";
import Link from "next/link";
import { Button } from "@/components/comman/Button";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const Notebook = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="container mt-5 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-urbanist font-bold text-[24px] text-[#3D2F2F] align-middle">
          NOTESBOOK GLOBAL ACADEMY Merchandise
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
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth mt-5"
      >
        {note.map((item) => (
          <Link href="/products/slug">
            <CourseCard
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
      <div className="flex mt-4 justify-end">
        <Link href="/products">
          <Button>View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default Notebook;
