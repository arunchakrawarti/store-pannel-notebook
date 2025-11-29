import React from "react";

const Input = ({ label, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {label && (
        <label className="font-poppins font-medium text-[12px] leading-[20px] tracking-[0%] mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="font-poppins font-normal text-[14px] leading-[22px] tracking-[0%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default Input;
