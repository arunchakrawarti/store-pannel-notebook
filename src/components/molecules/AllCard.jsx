import React from "react";

const AllCard = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
       <input type="checkbox" />
      <p className="font-urbanist font-medium text-[16px] leading-[24px] align-middle capitalize">
        {title}
      </p>
    </div>
  );
};

export default AllCard;
