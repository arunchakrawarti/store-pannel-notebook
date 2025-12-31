import React from "react";

const AllCard = ({ title }) => {
  return (
    <div className="flex items-center px-4 gap-3">
       <input type="checkbox" className="text-[#767676] cursor-pointer"/>
      <p className="font-urbanist font-medium text-[17px] text-[#495560] align-middle capitalize">
        {title}
      </p>
    </div>
  );
};

export default AllCard;
