// "use client";
// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import {
//   Heart,
//   ShoppingCart,
//   ShoppingBag,
//   Menu,
//   X,
//   Search,
// } from "lucide-react";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import Link from "next/link";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileBtnRef = useRef(null);

//   return (
//     <>
//       <div className="fixed top-0 left-0 w-full z-40 bg-white">
//         <div className="w-full bg-black text-white text-center py-1 text-[13px] sm:text-[14px] md:text-[15px] font-urbanist">
//           Welcome to Notebook Global Academy Store
//         </div>

//         <header className="shadow bg-white w-full">
//           <div className="max-w-[1300px] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
//             <Image
//               src="/img/Notebook.png"
//               width={60}
//               height={60}
//               alt="Logo"
//               className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]"
//             />

//             <div className="hidden lg:flex flex-1 mx-6">
//               <div className="flex items-center w-full max-w-[450px] bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
//                 <Search size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search for Products..."
//                   className="flex-1 ml-3 bg-transparent outline-none text-[14px]"
//                 />
//               </div>
//             </div>

//             <div className="hidden md:flex items-center gap-5">
//               <div className="relative">
//                 <div
//                   ref={profileBtnRef}
//                   onClick={() => setProfileOpen(!profileOpen)}
//                   className="px-3 sm:px-4 py-2 bg-[#2E3192] flex items-center gap-2 text-white cursor-pointer rounded-md"
//                 >
//                   <span className="font-urbanist text-[14px] sm:text-[15px] md:text-[16px]">
//                     Lazarus
//                   </span>
//                   <MdKeyboardArrowRight
//                     className={`${
//                       profileOpen ? "rotate-90" : ""
//                     } transition-all`}
//                   />
//                 </div>
//               </div>

//               <Link href="/">
//                 <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
//                   <ShoppingBag size={23} />
//                   <span className="font-urbanist hidden xl:block">Shop</span>
//                 </div>
//               </Link>

//               <Link href="/add-to-card">
//                 <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
//                   <Heart size={23} />
//                   <span className="font-urbanist hidden xl:block">
//                     My Wishlist
//                   </span>
//                 </div>
//               </Link>

//               <Link href="/add-to-card">
//                 <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
//                   <ShoppingCart size={23} />
//                   <span className="font-urbanist hidden xl:block">My Cart</span>
//                 </div>
//               </Link>
//             </div>

//             <button
//               className="md:hidden"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {menuOpen && (
//             <div className="md:hidden bg-white shadow-lg w-full py-4 px-4 space-y-4">
//               <button className="w-full text-white px-3 py-2 bg-[#2E3192] rounded-md">
//                 Lazarus
//               </button>

//               <div className="bg-[#2E3192] text-white  rounded-md py-2">
//                 <Link href="/my-profile">
//                   <p
//                     className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     My Profile
//                   </p>
//                 </Link>
//                 <Link href="/my-order">
//                   <p
//                     className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     My Orders
//                   </p>
//                 </Link>
//                 <p
//                   className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Logout
//                 </p>
//               </div>

//               <Link href="/">
//                 <div
//                   className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 "
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <ShoppingBag size={22} />
//                   <span className="font-urbanist font-medium text-[15px]">
//                     Shop
//                   </span>
//                 </div>
//               </Link>

//               <Link href="/add-to-card">
//                 <div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
//                   <Heart size={22} />
//                   <span className="font-urbanist font-medium text-[15px]">
//                     My Wishlist
//                   </span>
//                 </div>
//               </Link>

//               <Link href="add-to-card">
//                 <div
//                   className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <ShoppingCart size={22} />
//                   <span className="font-urbanist font-medium text-[15px]">
//                     My Cart
//                   </span>
//                 </div>
//               </Link>

//               <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
//                 <Search size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search for Products..."
//                   className="flex-1 ml-2 bg-transparent outline-none text-[14px]"
//                 />
//               </div>
//             </div>
//           )}
//         </header>
//       </div>

//       {profileOpen && (
//         <div
//           className="absolute bg-[#2E3192] text-white rounded-md shadow-lg py-2 w-44 sm:w-48 z-[9999]"
//           style={{
//             top:
//               (profileBtnRef.current?.getBoundingClientRect().bottom || 90) + 6,
//             left: profileBtnRef.current?.getBoundingClientRect().left || 0,
//           }}
//         >
//           <Link href="/my-profile">
//             <p
//               onClick={() => setProfileOpen(false)}
//               className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
//             >
//               My Profile
//             </p>
//           </Link>

//           <Link href="/my-order">
//             <p
//               onClick={() => setProfileOpen(false)}
//               className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
//             >
//               My Orders
//             </p>
//           </Link>

//           <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">Logout</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

"use client";
import React, { useState, useRef } from "react";
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
  const profileBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 bg-white">
        <div className="w-full bg-black text-white text-center py-1 text-[13px] sm:text-[14px] md:text-[15px] font-urbanist">
          Welcome to Notebook Global Academy Store
        </div>

        <header className="shadow bg-white w-full">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
            {/* LOGO */}
            <Image
              src="/img/Notebook.png"
              width={60}
              height={60}
              alt="Logo"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]"
            />

            {/* SEARCH (LARGE SCREEN) */}
            <div className="hidden lg:flex flex-1 mx-6">
              <div className="flex items-center w-full max-w-[450px] bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="flex-1 ml-3 bg-transparent outline-none text-[14px]"
                />
              </div>
            </div>

            {/* RIGHT SECTION (LARGE SCREEN) */}
            <div className="hidden md:flex items-center gap-5">
              {/* LAZARUS BUTTON */}
              <div className="relative">
                <div
                  ref={profileBtnRef}
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="px-3 sm:px-4 py-2 bg-[#2E3192] flex items-center gap-2 text-white cursor-pointer rounded-md"
                >
                  <span className="font-urbanist text-[14px] sm:text-[15px] md:text-[16px]">
                    Lazarus
                  </span>
                  <MdKeyboardArrowRight
                    className={`${
                      profileOpen ? "rotate-90" : ""
                    } transition-all`}
                  />
                </div>
              </div>

              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <ShoppingBag size={23} />
                  <span className="font-urbanist hidden xl:block">Shop</span>
                </div>
              </Link>

              <Link href="/add-to-card">
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <Heart size={23} />
                  <span className="font-urbanist hidden xl:block">
                    My Wishlist
                  </span>
                </div>
              </Link>

              <Link href="/add-to-card">
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <ShoppingCart size={23} />
                  <span className="font-urbanist hidden xl:block">My Cart</span>
                </div>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg w-full py-4 px-4 space-y-4">
              <button className="w-full text-white px-3 py-2 bg-[#2E3192] rounded-md">
                Lazarus
              </button>

              <div className="bg-[#2E3192] text-white rounded-md py-2">
                <Link href="/my-profile">
                  <p
                    className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </p>
                </Link>

                <Link href="/my-order">
                  <p
                    className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Orders
                  </p>
                </Link>

                <p
                  className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Logout
                </p>
              </div>

              <Link href="/">
                <div
                  className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingBag size={22} />
                  <span className="font-urbanist font-medium text-[15px]">
                    Shop
                  </span>
                </div>
              </Link>

              <Link href="/add-to-card">
                <div
                  className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <Heart size={22} />
                  <span className="font-urbanist font-medium text-[15px]">
                    My Wishlist
                  </span>
                </div>
              </Link>

              <Link href="/add-to-card">
                <div
                  className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCart size={22} />
                  <span className="font-urbanist font-medium text-[15px]">
                    My Cart
                  </span>
                </div>
              </Link>

              <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="flex-1 ml-2 bg-transparent outline-none text-[14px]"
                />
              </div>
            </div>
          )}
        </header>
      </div>

      {profileOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-[#2E3192] text-white rounded-md shadow-lg py-2 w-44 sm:w-48 z-[9999]"
          style={{
            top:
              profileBtnRef.current?.getBoundingClientRect().bottom +
              window.scrollY +
              6,
            left:
              profileBtnRef.current?.getBoundingClientRect().left +
              window.scrollX,
          }}
        >
          <Link href="/my-profile">
            <p
              onClick={() => setProfileOpen(false)}
              className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
            >
              My Profile
            </p>
          </Link>

          <Link href="/my-order">
            <p
              onClick={() => setProfileOpen(false)}
              className="px-4 py-2 hover:bg-[#252877] cursor-pointer"
            >
              My Orders
            </p>
          </Link>

          <p className="px-4 py-2 hover:bg-[#252877] cursor-pointer">Logout</p>
        </div>
      )}
    </>
  );
};

export default Header;
