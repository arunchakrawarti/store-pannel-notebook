import React from "react";

const AllCard = ({ title }) => {
  return (
    <div className="flex items-center px-5 gap-2">
       <input type="checkbox" size={18} className="text-[#767676] cursor-pointer"/>
      <p className="font-urbanist font-medium text-[17px] text-[#495560] align-middle capitalize">
        {title}
      </p>
    </div>
  );
};

export default AllCard;
