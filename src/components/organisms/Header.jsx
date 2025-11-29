// "use client";
// import React from "react";
// import Image from "next/image";
// import { Heart, ShoppingCart, ShoppingBag } from "lucide-react";

// const Header = () => {
//   return (
//     <>
//      <div className="fixed z-30 w-full">
     
//       <div className="w-full bg-[#000000] text-white font-urbanist font-normal text-[18px] leading-[28px] tracking-normal align-middle text-center">
//         Welcome to Notebook Global Academy Store
//       </div>

     
//       <header className="w-full bg-white shadow top-[26px] z-50">
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-3">

          
//           <div className="flex items-center gap-4">

//             {/* Logo */}
//             <Image
//               src="/img/Notebook.png"
//               width={55}
//               height={55}
//               alt="Logo"
//               className="w-[55px] h-[55px]"
//             />

           
//             <div className="flex items-center w-[380px] bg-white border border-gray-300 rounded-full px-3 py-2">
//               <Image src="/img/search.png" width={18} height={18} alt="Search" />
//               <input
//                 type="text"
//                 placeholder="Search for Products..."
//                 className="flex-1 ml-2 font-urbanist font-medium text-[14px] leading-[100%] tracking-normal align-middle"
//               />
//             </div>

           
            
//           </div>

         
//           <div className="flex items-center gap-8">
//             <div>
//                 <button
//               className="
//                 font-urbanist font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle rounded-md text-white px-3 py-2 bg-[#2E3192]
//               "
//             >
//               Learners 
//             </button>
//             </div>
           
//             <div className="flex items-center gap-1 cursor-pointer">
//               <ShoppingBag size={25} />
//               <span className="font-urbanist font-semibold text-[16px] leading-[20px] tracking-normal align-middle">Shop</span>
//             </div>

       
//             <div className="flex items-center gap-1 cursor-pointer">
//               <Heart size={25} />
//               <span className="font-urbanist font-semibold text-[16px] leading-[20px] tracking-normal align-middle">My Wishlist</span>
//             </div>

            
//             <div className="flex items-center gap-1 cursor-pointer">
//               <ShoppingCart size={25} />
//               <span className="font-urbanist font-semibold text-[16px] leading-[20px] tracking-normal align-middle">My Cart</span>
//             </div>

//           </div>
//         </div>
//       </header>
//      </div>
//     </>
//   );
// };

// export default Header;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, ShoppingBag, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-30 w-full">
      {/* Top Announcement Bar */}
      <div className="w-full bg-black text-white font-urbanist font-normal text-[18px] leading-[28px] tracking-normal text-center py-1">
        Welcome to Notebook Global Academy Store
      </div>

      {/* Main Header */}
      <header className="w-full bg-white shadow top-[26px] z-50">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/img/Notebook.png"
              width={55}
              height={55}
              alt="Logo"
              className="w-[55px] h-[55px]"
            />
          </div>

          {/* Center: Search (only large screens) */}
          <div className="hidden lg:flex flex-1 mx-6">
            <div className="flex items-center w-[450px] bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
              {/* <Image src="/img/search.png" width={20} height={20} alt="Search" /> */}
              <Search/>
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 ml-3 font-urbanist font-medium text-[16px] leading-[24px] tracking-normal bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button className="font-urbanist font-medium text-[16px] leading-[24px] tracking-normal text-white px-4 py-2 bg-[#2E3192] rounded-md">
              Learners
            </button>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">Shop</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">My Wishlist</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">My Cart</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg w-full py-4 px-4 space-y-3">
            <button className="w-full font-urbanist font-medium text-[16px] leading-[24px] tracking-normal text-white px-3 py-2 bg-[#2E3192] rounded-md">
              Learners
            </button>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">Shop</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <Heart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">My Wishlist</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={25} />
              <span className="font-urbanist font-semibold text-[16px] leading-[20px]">My Cart</span>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mt-2">
              <Image src="/img/search.png" width={18} height={18} alt="Search" />
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
