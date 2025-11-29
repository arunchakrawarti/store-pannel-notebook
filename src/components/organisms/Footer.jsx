import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1B47] text-white pt-12 pb-6 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-25">
      
      <div className="max-w-[1440px] mx-auto">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
      
          <div>
            <img
              src="/img/note.png"
              alt="logo"
              className="w-20 h-20 object-contain bg-white rounded-full"
            />

            <p className="font-urbanist font-normal text-[16px] leading-[24px] mt-4">
              A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea, Dr.
              Mukherjee Nagar, Delhi, 110009
            </p>

            <div className="mt-4 space-y-1">
              <p className="font-urbanist font-normal text-[16px] leading-[24px]">
                Contact: support@example.com
              </p>
              <p className="font-urbanist font-normal text-[16px] leading-[24px]">
                Phone: <span className="bg-[#EC7954] px-2 py-2 rounded-2xl">+91 9876543210</span>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <FaFacebookF className="text-xl hover:text-blue-400 cursor-pointer" />
              <FaTwitter className="text-xl hover:text-blue-300 cursor-pointer" />
              <FaInstagram className="text-xl hover:text-pink-400 cursor-pointer" />
              <FaYoutube className="text-xl hover:text-red-500 cursor-pointer" />
              <FaPinterest className="text-xl hover:text-red-400 cursor-pointer" />
            </div>
          </div>

         
          <div>
            <h3 className="font-urbanist font-bold text-[20px] leading-[28px] mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return & Exchange",
                "Shipping Policy",
                "Shop By Category"
              ].map((item, index) => (
                <li key={index} className="cursor-pointer hover:underline font-urbanist text-[16px] leading-[24px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-urbanist font-bold text-[20px] leading-[28px] mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Contact Us", "Blog"].map((item, index) => (
                <li key={index} className="cursor-pointer hover:underline font-urbanist text-[16px] leading-[24px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-urbanist font-bold text-[20px] leading-[28px] mb-4">
              Our App
            </h3>
            <ul className="space-y-2">
              {[
                "Notesbook Global Academy - Android APP",
                "Notesbook Global Academy - IOS APP",
                "User Dashboard",
                "Daily Current Affairs"
              ].map((item, index) => (
                <li key={index} className="cursor-pointer hover:underline font-urbanist text-[16px] leading-[24px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <div className="border-t border-gray-500 mt-10 pt-4 text-center font-urbanist text-[16px] leading-[24px]">
          Popular Searches: UPSC, SSC, Banking Exams, NEET, JEE, Railway Exams,
          Defence Exams, State Exams, Online Test Series, Mock Tests & many more…
        </div>

      </div>

    </footer>
  );
};

export default Footer;
