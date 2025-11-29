import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-37">
      
      <h1 className="font-inter font-semibold text-[20px] sm:text-[24px] leading-tight mb-6">
        My Profile
      </h1>

      
      <div className="w-full border border-gray-300 rounded-md overflow-hidden">
       
        <div className="p-4 sm:p-6">
          <h2 className="font-poppins font-semibold text-[16px] sm:text-[18px] leading-[20px] mb-4">
            Welcome Dev Sisodiya,
          </h2>

          <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-4 flex-wrap">
            
            <div className="flex items-center gap-1 min-w-0">
              <h2 className="font-poppins font-normal text-[12px] sm:text-[14px] leading-[20px]">
                Name:
              </h2>
              <p className="font-poppins font-medium text-[12px] sm:text-[14px] leading-[20px] truncate">
                Dev Sisodiya
              </p>
            </div>

            
            <div className="flex items-center gap-1 min-w-0">
              <FiPhone className="text-gray-600" />
              <h2 className="font-poppins font-normal text-[12px] sm:text-[14px] leading-[20px]">
                Phone:
              </h2>
              <p className="font-poppins font-medium text-[12px] sm:text-[14px] leading-[20px] truncate">
                354637888
              </p>
            </div>

            
            <div className="flex items-center gap-1 min-w-0">
              <CiMail className="text-gray-600" />
              <h2 className="font-poppins font-normal text-[12px] sm:text-[14px] leading-[20px]">
                Email:
              </h2>
              <p className="font-poppins font-medium text-[12px] sm:text-[14px] leading-[20px] truncate">
                dev@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 border-t border-gray-300 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
          <div className="flex-1 min-w-0">
            <h2 className="font-poppins font-semibold text-[14px] sm:text-[16px] leading-[20px]">
              Saved Address:
            </h2>
            <p className="font-poppins mt-3 font-normal text-[12px] sm:text-[14px] leading-[20px] break-words overflow-hidden">
              42, Green Oak Residency, Palm Street, Indira Nagar, New Delhi – 110045
            </p>
          </div>

          <div className="flex items-center px-3 py-2 gap-2 sm:gap-3 rounded-md border border-[#2E3192] text-[#2E3192] cursor-pointer hover:bg-gray-100  transition w-max">
            <FaRegEdit />
            <button className="font-poppins font-medium text-[12px] sm:text-[14px]">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
