import React from "react";
import Image from "next/image";

const Card = ({ img, title }) => {
  return (
    <div className="w-[140px] sm:w-[160px] md:w-[180px] flex flex-col items-center text-center">
      
      {/* Image Wrapper */}
      <div className="w-[120px] sm:w-[140px] md:w-[173px] aspect-square rounded-full overflow-hidden relative flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300">
        <Image
          src={img}
          fill
          alt={title || "exam image"}
          className="object-cover"
          sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 173px"
        />
      </div>

      {/* Title */}
      <p className="mt-3 font-workSans font-medium text-sm sm:text-base leading-tight w-full px-2">
        {title}
      </p>
    </div>
  );
};

export default Card;
