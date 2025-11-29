"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  ShoppingBag,
  Menu,
  X,
  Search,
} from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-30 w-full">
      <div className="w-full bg-black text-white font-urbanist font-normal text-[18px] leading-[28px] tracking-normal text-center py-1">
        Welcome to Notebook Global Academy Store
      </div>

      <header className="w-full bg-white shadow top-[26px] z-50">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-4">
            <Image
              src="/img/Notebook.png"
              width={55}
              height={55}
              alt="Logo"
              className="w-[55px] h-[55px]"
            />
          </div>

          <div className="hidden lg:flex flex-1 mx-6">
            <div className="flex items-center w-[450px] bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
              <Search />
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 ml-3 font-urbanist font-medium text-[16px] leading-[24px] tracking-normal bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="px-4 py-2 bg-[#2E3192] flex items-center gap-2 text-white cursor-pointer rounded-md">
              <button className="font-urbanist font-medium text-[16px] leading-[24px] tracking-normal ">
                Lazarus
              </button>
              <MdKeyboardArrowRight  />
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                Shop
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                My Wishlist
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                My Cart
              </span>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg w-full py-4 px-4 space-y-3">
            <button className="w-full font-urbanist font-medium text-[16px] leading-[24px] tracking-normal text-white px-3 py-2 bg-[#2E3192] rounded-md">
              Learners
            </button>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                Shop
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                My Wishlist
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">
                My Cart
              </span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mt-2">
              <Image
                src="/img/search.png"
                width={18}
                height={18}
                alt="Search"
              />
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 ml-2 font-urbanist font-medium text-[14px] leading-[100%] tracking-normal bg-transparent outline-none"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
