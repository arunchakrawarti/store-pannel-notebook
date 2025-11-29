"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const banners = ["/img/banner.png", "/img/banner1.png", "/img/banner2.png"];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === banners.length - 1) {
          setDirection(-1);
          return prev - 1;
        }
        if (prev === 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full overflow-hidden top-25 bg-black h-[430px] flex items-center justify-center">
      {/* Banner Images */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center h-full bg-black"
          >
            <Image
              src={src}
              alt={`banner-${index}`}
              width={1440}
              height={430}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute  bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
