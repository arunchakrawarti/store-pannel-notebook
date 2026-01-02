import React from "react";
import Image from "next/image";

const CategoryCard = ({ img, title }) => {
  return (
    <div className=" flex flex-col items-center ">

      <div className="relative w-[120px] sm:w-[140px] md:w-[130px] aspect-square rounded-full overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
        <Image
          src={img}
          fill
          alt={title || "exam image"}
          className="object-cover"
          sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 173px"
        />
      </div>

      <p className="mt-3 font-['Work_Sans'] font-medium text-[12px]  text-[#121717] px-2">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
