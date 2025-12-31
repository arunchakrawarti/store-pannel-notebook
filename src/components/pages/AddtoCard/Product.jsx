import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Product = () => {
  return (
    <div className="w-full pt-38 container mx-auto py-10 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 border border-gray-300 rounded-2xl p-4">
        <div className="hidden md:flex items-center justify-between px-3 py-2 border-b text-black border-gray-300 font-inter text-[14px] font-semibold  tracking-[0]">
          <span className="w-[25%] text-center">Product</span>
          <span className="w-[15%]">Price</span>
          <span className="w-[25%]">Quantity</span>
          <span className="w-[13%]">Total</span>
        </div>

        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 md:border-none py-4 gap-4"
          >
            <div className="flex items-center gap-4 w-full md:w-[25%]">
              <img
                src="/img/shops.png"
                className="h-12 w-15 object-cover rounded-md"
                alt="Product"
              />
              <p className="font-inter text-[14px] font-semibold text-black tracking-[0] line-clamp-3">
                Bihar Daroga Pariksha Fast Track Study Book & Yearly Bihar Current Affairs 2025 Set of 2 Books
                Hindi Medium

              </p>
            </div>

            <div className="w-full md:w-[15%] font-inter font-semibold text-[14px] text-black tracking-normal">
              ₹199.00
            </div>

            <div className="w-full md:w-[25%] flex text-black items-center gap-3">
              <button className="p-2 rounded-full bg-[#FAFAFA] hover:bg-gray-100">
                <FiMinus size={18} />
              </button>

              <span className="font-medium">1</span>

              <button className="p-2  rounded-full bg-[#FAFAFA] hover:bg-gray-100">
                <FiPlus size={18} />
              </button>
            </div>

            <div className="w-full md:w-[15%] font-inter font-semibold text-[14px] text-black tracking-normal">
              ₹199.00
            </div>
          </div>
        ))}
        <hr className="border-gray-300 mt-5" />
        <div className="flex flex-col sm:flex-col md:flex-row justify-between gap-4 pt-10">
          <button className="px-4 py-2 border-2 cursor-pointer border-[#2E3192] text-[#2E3192] rounded-lg font-inter text-[20px] font-medium tracking-[0] w-full md:w-auto">
            Back to Store
          </button>

          <button className="px-4 py-2 border-2 border-[#2E3192] text-[#2E3192] cursor-pointer rounded-lg font-inter text-[20px] font-medium tracking-[0] w-full md:w-auto">
            Clear Cart
          </button>
        </div>

      </div>

      <div className="border md:col-span-1 border-gray-300 rounded-2xl p-5 h-fit sticky  bg-[#FAFAFA] top-4">
        <div className="space-y-6 text-sm">
          <p className="flex justify-between font-inter font-normal text-[17px]">
            <span className="text-[#00118E]">Total MRP</span>
            <span className="text-black font-semibold">₹ 4549</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter font-normal text-[17px]">
            <span className="text-[#00118E]">Discount on MRP</span>
            <span className="text-green-600 font-semibold">- ₹ 1452.00</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter font-normal text-[17px]">
            <span className="text-[#00118E]">Tax</span>
            <span className="font-semibold text-black">₹ 0.00</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter font-normal text-[17px]">
            <span className="text-[#00118E]">Shipping Charges</span>
            <span className="font-semibold text-green-600">Free</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter font-normal text-[17px]">
            <span className="text-[#00118E]">Total Amount</span>
            <span className="font-semibold text-black">₹ 3097</span>
          </p>
          <hr className="border-gray-300" />
          <button className="w-full mt-7 bg-green-600 hover:bg-green-700 text-white cursor-pointer font-inter text-[16px] py-3 rounded-lg">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
