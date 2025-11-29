import Image from "next/image";
import { CiHeart, CiCircleCheck } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdDirectionsBus, MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import React from "react";

const Orders = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 pt-30 lg:px-20 py-10">
      
    
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/img/order.png"
          alt="Bihar Daroga Book"
          width={588}
          height={450}
          className="rounded-lg w-full max-w-[450px] md:max-w-[588px] object-cover"
        />
      </div>

      
      <div className="flex-1 flex flex-col gap-5">
        
       
        <div className="flex justify-between items-start gap-4">
          <h1 className="font-urbanist font-bold text-xl sm:text-2xl lg:text-3xl leading-snug text-gray-900">
            Bihar Daroga Pariksha Fast Track Study Book & Yearly Bihar Current
            Affairs 2025 Set of 2 Books Hindi Medium
          </h1>

          <button className="h-10 w-10 rounded-full bg-[#EEEFFF] flex items-center justify-center hover:bg-[#DDDFFF] transition">
            <CiHeart className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        
        <p className="font-urbanist font-medium text-base leading-6 text-gray-700">
          Bihar Daroga 2025–26 exam guide: concise theory, Bihar GK, MCQs and
          complete yearly current affairs. All-in-one prep for BPSSC aspirants.
        </p>

     
        <h2 className="font-urbanist font-semibold text-base leading-8 text-gray-900">
          By Khan Global Studies
        </h2>

       
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex gap-1 text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="flex items-center gap-2 bg-[#EFF6FF] px-3 py-2 rounded-md text-[#78A962]">
            <CiCircleCheck />
            <span>In Stock</span>
          </div>
        </div>

        <div>
          <p className="font-urbanist font-bold text-xl text-gray-900">
            ₹399{" "}
            <span className="font-normal text-gray-500 line-through">₹650</span>
          </p>
        </div>

        <p className="font-urbanist text-[16px] leading-6 text-gray-600">
          Inclusive of all taxes (Also includes all applicable duties)
        </p>

       
        <div className="flex items-center gap-3">
          <label className="font-urbanist font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            defaultValue={1}
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#2E3192] text-white font-urbanist font-semibold px-15 py-3 rounded hover:bg-blue-800 transition">
            Buy Now
          </button>

          <button className="bg-white border border-gray-300 font-urbanist font-semibold px-15 py-3 rounded hover:bg-gray-100 transition">
            Add to Cart
          </button>
        </div>

    
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MdOutlineDoNotDisturbOnTotalSilence className="h-6 w-6 text-gray-600" />
            <p className="font-urbanist font-medium text-[16px] leading-[26px] text-gray-600">
              The total price includes all taxes, with no additional charges at checkout.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MdDirectionsBus className="h-6 w-6 text-gray-600" />
            <p className="font-urbanist font-medium text-[16px] leading-[26px] text-gray-600">
              Enjoy free shipping on all orders! No additional charges apply.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <span className="font-urbanist">Share:</span>

          <button className="h-10 w-10 bg-[#EFF6FF] hover:text-blue-600 rounded-md flex justify-center items-center">
            <TiSocialFacebook size={20} />
          </button>

          <button className="h-10 w-10 bg-[#EFF6FF] hover:text-red-500 rounded-md flex justify-center items-center">
            <GiTireIronCross size={20} />
          </button>

          <button className="h-10 w-10 bg-[#EFF6FF] hover:text-green-600 rounded-md flex justify-center items-center">
            <IoLogoWhatsapp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
