"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  ShoppingBag,
  Menu,
  X,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 bg-white shadow">
        <div className="w-full bg-black text-white font-urbanist text-[18px] text-center py-1.5">
          Welcome to Notebook Global Academy Store
        </div>

        <header className="bg-white w-full">
          <div className="max-w-[1380px] mx-auto flex items-center justify-between px-3 sm:px-4 py-2">
            <Image
              src="/img/notebook.png"
              width={70}
              height={70}
              alt="Logo"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]"
            />
            <div className="hidden lg:flex flex-1 mx-6">
              <div className="flex items-center w-full max-w-[570px] bg-[#F2F3FF] rounded-lg px-4 py-2.5">
                <Search size={18} className="text-[#2E3192]" />
                <input
                  type="text"
                  placeholder="Search for a Products .."
                  className="flex-1 ml-3 bg-transparent outline-none font-urbanist text-[15px] text-[#666666] placeholder:text-[#666666]"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg  hover:bg-gray-100">
                  <ShoppingBag size={23} className="text-[#2E3192]" />
                  <span className="font-urbanist font-semibold text-[16px] text-[#616161]">
                    Shop
                  </span>
                </div>
              </Link>

              <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                <Heart size={23} className="text-[#2E3192]" />
                <span className="font-urbanist font-semibold text-[16px] text-[#616161]">
                  Wishlist
                </span>
              </div>

              <Link href="/carts">
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <ShoppingCart size={23} className="text-[#2E3192]" />
                  <span className="font-urbanist font-semibold text-[16px] text-[#616161]">
                    Cart
                  </span>
                </div>
              </Link>
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="p-2 bg-[#2E3192] text-white rounded-full cursor-pointer"
                >
                  <User size={22} />
                </div>

                {profileOpen && (
                  <div className="absolute -right-13 bg-[#2E3192] text-white shadow-lg rounded-md py-2 w-44 z-50">
                    <Link href="/profile" onClick={() => setProfileOpen(false)}>
                      <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                        My Profile
                      </p>
                    </Link>
                    <Link href="/orders" onClick={() => setProfileOpen(false)}>
                      <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                        My Orders
                      </p>
                    </Link>
                    <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              className="md:hidden text-[#616161]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg w-full py-4 px-4 space-y-5">
              <div className="flex items-center bg-[#F2F3FF] rounded-lg px-4 py-2">
                <Search size={18} className="text-[#2E3192]" />
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="flex-1 ml-3 bg-transparent outline-none font-urbanist text-[15px] text-[#666]"
                />
              </div>

              <Link href="/" onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <ShoppingBag size={22} className="text-[#2E3192]" />
                  <span className="font-urbanist font-semibold text-[16px] text-[#616161]">Shop</span>
                </div>
              </Link>

             <Link  href="" onClick={() => setMenuOpen(false)}>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Heart size={22} className="text-[#2E3192]" />
                <span className="font-urbanist font-semibold text-[16px] text-[#616161]">Wishlist</span>
              </div>
             </Link>

              <Link href="/carts" onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <ShoppingCart size={22} className="text-[#2E3192]" />
                  <span className="font-urbanist font-semibold text-[16px] text-[#616161]">Cart</span>
                </div>
              </Link>

              <div className="text-[#616161] rounded-lg mt-3">
                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                  <p className="px-4 py-2 hover:bg-gray-100 text-[#616161]">My Profile</p>
                </Link>
                <Link href="/orders" onClick={() => setMenuOpen(false)}>
                  <p className="px-4 py-2 hover:bg-gray-100 text-[#616161]">My Orders</p>
                </Link>
                <p className="px-4 py-2 hover:bg-gray-100 text-[#616161] cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
