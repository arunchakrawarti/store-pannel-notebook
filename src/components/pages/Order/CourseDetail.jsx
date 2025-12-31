import Image from "next/image";
import { CiHeart, CiCircleCheck } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import {
  MdDirectionsBus,
  MdOutlineDoNotDisturbOnTotalSilence,
} from "react-icons/md";
import React from "react";


const Orders = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 mt-8 justify-between container mx-auto pt-30 ">
      <div className="w-full md:w-[40%] flex justify-center md:justify-start">
        <Image
          src="/img/order.png"
          alt="Bihar Daroga Book"
          width={588}
          height={450}
          className="rounded-3xl w-full max-h-[450px] md:max-h-[455px] max-w-[450px] md:max-w-[588px] object-fit"
        />
      </div>

      <div className=" w-full lg:w-[60%] flex flex-col">
        <div className="flex">
          <h1 className="font-urbanist font-bold text-[32px] leading-10  text-[#0D134E]">
            Bihar Daroga Pariksha Fast Track Study Book & Yearly Bihar Current
            Affairs 2025 Set of 2 Books Hindi Medium
          </h1>

          <p className="h-10 w-20 mt-3 rounded-full bg-[#EEEFFF] flex items-center justify-center hover:bg-[#DDDFFF]">
            <CiHeart className="h-6 w-6 text-gray-700" />
          </p>
        </div>

        <p className="font-urbanist font-medium w-[95%] mt-2 text-[17px] text-black">
          Bihar Daroga 2025–26 exam guide: concise theory, Bihar GK, MCQs and
          complete yearly current affairs. All-in-one prep for BPSSC aspirants.
        </p>

        <h2 className="font-urbanist font-semibold mt-2 text-[16px] text-black align-middle">
          By Khan Global Studies
        </h2>

        <div className="flex items-center gap-3 mt-5 flex-wrap">
          <div className="flex gap-1 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-md text-[#78A962]">
            <CiCircleCheck />
            <span>In Stock</span>
          </div>
        </div>

        <div>
          <p className="font-urbanist mt-4 font-extrabold text-[26px] text-black align-middle">
            ₹399.00{" "}
            <span className="font-urbanist font-extrabold text-[17px]  align-middle text-gray-400 line-through">₹650.00</span>
          </p>
        </div>

        <p className="font-urbanist text-[16px] mt-2 text-gray-600">
          Inclusive of all taxes (Also includes all applicable duties)
        </p>

        <div className="flex items-center mt-5 gap-6">
          <label className="font-urbanist font-bold text-[16px] text-black align-middle">
            Quantity
          </label>
          <div className="bg-[#EFF6FF] rounded-md px-3 py-2">
            <input
              type="number"
              defaultValue={1}
              className="w-18 border bg-white text-gray-900 border-gray-300 cursor-pointer rounded-md py-1  text-center focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col mt-10 sm:flex-row gap-4">
            <button className="bg-[#2E3192] text-white cursor-pointer font-urbanist font-semibold px-23 py-2.5 rounded-lg hover:bg-blue-800 transition">
              Buy Now
            </button>

            <button className="bg-white border-2 border-[#372AAC] font-urbanist font-semibold px-23 py-2 text-[#372AAC] rounded-lg hover:bg-gray-100 transition">
              Add to Cart
            </button>
        </div>

        <div className="flex flex-col mt-10 gap-4">
          <div className="flex items-start gap-5">
            <MdOutlineDoNotDisturbOnTotalSilence className="h-6 w-6 text-gray-600" />
            <p className="font-urbanist font-medium text-[19px]  align-middle text-[#000000E0]">
              The total price includes all taxes, with no additional charges at
              checkout
            </p>
          </div>

          <div className="flex items-start gap-5">
            <MdDirectionsBus className="h-6 w-6 text-gray-600" />
            <p className="font-urbanist font-medium text-[19px]  align-middle text-[#000000E0]">
              Enjoy free shipping on all orders! No additional charges apply
            </p>
          </div>
        </div>

        <div className="flex items-center mt-5 text-[#00009D] gap-3">
          <span className="font-urbanist text-black font-medium text-[18px]  align-middle">Share:</span>

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
