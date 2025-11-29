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
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="fixed z-30 w-full">
     
      <div className="w-full bg-black text-white font-urbanist text-[18px] text-center py-1">
        Welcome to Notebook Global Academy Store
      </div>

     
      <header className="w-full bg-white shadow top-[26px] z-50">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          
          <Image
            src="/img/Notebook.png"
            width={55}
            height={55}
            alt="Logo"
            className="w-[55px] h-[55px]"
          />

         
          <div className="hidden lg:flex flex-1 mx-6">
            <div className="flex items-center w-[450px] bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
              <Search />
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 ml-3 font-urbanist font-medium bg-transparent outline-none"
              />
            </div>
          </div>

        
          <div className="hidden md:flex items-center gap-6">
           
            <div className="relative">
              <div
                className="px-4 py-2 bg-[#2E3192] flex items-center gap-2 text-white cursor-pointer rounded-md"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <span className="font-urbanist font-medium text-[16px]">
                  Lazarus
                </span>
                <MdKeyboardArrowRight
                  className={`${
                    profileOpen ? "rotate-90" : ""
                  } transition-all duration-200`}
                />
              </div>

             
              {profileOpen && (
                <div className="absolute top-10 right-0 w-28 bg-[#2E3192] text-white rounded-md shadow-lg py-3 space-y-1">
                  <Link href="/my-profile">
                    <p  onClick={() => setProfileOpen(false)} className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                      My Profile
                    </p>
                  </Link>

                  <Link href="/my-order">
                    <p  onClick={() => setProfileOpen(false)} className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                      My Orders
                    </p>
                  </Link>
                  <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                    Logout
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold">Shop</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold">My Wishlist</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold">My Cart</span>
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
            <button className="w-full text-white px-3 py-2 bg-[#2E3192] rounded-md">
              Learners
            </button>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold">Shop</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold">My Wishlist</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold">My Cart</span>
            </div>

          
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mt-2">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 ml-2 bg-transparent outline-none"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
