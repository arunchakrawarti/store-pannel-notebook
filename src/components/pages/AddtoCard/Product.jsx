import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Product = () => {
  return (
    <div className="w-full pt-33 max-w-[1400px] mx-auto px-4 lg:px-16 py-10 grid md:grid-cols-3 gap-6">

     
      <div className="md:col-span-2 border border-gray-300 rounded-lg p-4">

        
        <div className="hidden md:flex items-center justify-between px-3 py-2 font-semibold border-b border-gray-300 text-sm">
          <span className="w-[40%]">Product</span>
          <span className="w-[15%] text-center">Price</span>
          <span className="w-[25%] text-center">Quantity</span>
          <span className="w-[15%] text-center">Total</span>
          <span className="w-[5%] text-center"></span>
        </div>

       
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 md:border-none py-4 gap-4"
          >
           
            <div className="flex items-center gap-4 w-full md:w-[40%]">
              <img
                src="/img/shops.png"
                className="h-20 w-20 object-cover rounded-md"
                alt="Product"
              />
              <p className="text-sm font-medium leading-[20px] line-clamp-3">
                Bihar Durga Pariksha First Track Study Book...
              </p>
            </div>

            <div className="w-full md:w-[15%] text-left md:text-center text-[16px] font-medium">
              ₹199.00
            </div>

           
            <div className="w-full md:w-[25%] flex justify-start md:justify-center items-center gap-3">
              <button className="p-1 border rounded-full hover:bg-gray-100">
                <FiMinus size={18} />
              </button>

              <span className="font-medium">1</span>

              <button className="p-1 border rounded-full hover:bg-gray-100">
                <FiPlus size={18} />
              </button>
            </div>

           
            <div className="w-full md:w-[15%] text-left md:text-center font-semibold">
              ₹199.00
            </div>

           
            <div className="w-full md:w-[5%] text-right md:text-center">
              <button className="text-red-500 hover:text-red-700">
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        
        <div className="flex justify-between mt-5">
          <button className="px-4 py-2 border border-[#2E3192] text-[#2E3192] rounded-lg text-sm">
            Back to Store
          </button>

          <button className="px-4 py-2 border border-[#2E3192] text-[#2E3192] rounded-lg text-sm">
            Clear Cart
          </button>
        </div>
      </div>

     
      <div className="border border-gray-300 rounded-lg p-5 h-fit sticky top-4">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        <div className="space-y-5  text-sm">

          <p className="flex justify-between font-inter  text-[16px] leading-[24px]">
            <span className="text-[#00118E]">Total MRP</span>
            <span className="font-bold">₹ 4549</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter text-[16px] leading-[24px]">
            <span className="text-[#00118E]">Discount on MRP</span>
            <span className="text-green-600 font-bold">- ₹ 1452</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter text-[16px] leading-[24px]">
            <span className="text-[#00118E]">Tax</span>
            <span className="font-bold">₹ 0.00</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-inter text-[16px] leading-[24px]">
            <span className="text-[#00118E]">Shipping Charges</span>
            <span className="font-medium text-green-600">Free</span>
          </p>

          <hr className="border-gray-300" />

          <p className="flex justify-between font-semibold text-lg">
            <span className="text-[#00118E]">Total Amount</span>
            <span className="font-bold">₹ 3097</span>
          </p>

          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-inter text-[16px] leading-[24px] py-3 rounded-lg">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
