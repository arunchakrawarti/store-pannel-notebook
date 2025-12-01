import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import Input from "@/components/atoms/Input";

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
              <Input label="Name" placeholder=" Dev Sisodiya" />
            </div>

            
            <div className="flex items-center gap-1 min-w-0">
              <Input label="Phone" placeholder="  354637888" />
            </div>

            
            <div className="flex items-center gap-1 min-w-0">
               <Input label="Email" placeholder="dev@example.com" />
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 border-t border-gray-300 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-10">
          <div className="flex-1 min-w-0">
             <Input label=" Saved Address:"
             type="textarea" placeholder="42, Green Oak Residency, Palm Street, Indira Nagar, New Delhi – 110045" />
          </div>

          <div className="flex items-center px-3 py-2 gap-2 sm:gap-3 rounded-md border border-[#2E3192] text-[#2E3192] cursor-pointer hover:bg-gray-100  transition w-max">
            <FaRegEdit />
            <button className="font-poppins font-medium cursor-pointer text-[12px] sm:text-[14px]">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
