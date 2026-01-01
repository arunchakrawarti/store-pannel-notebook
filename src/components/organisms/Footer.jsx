import React from "react";
import { PhoneCallIcon } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#282747] text-white pt-12 pb-6">
      <div className="container mx-auto">

        <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <img
              src="/img/note.png"
              alt="logo"
              className="w-20 h-20 object-contain bg-white rounded-full"
            />

            <p className="font-urbanist font-normal text-[16px] mt-3">
              A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea,
              Dr. Mukherjee Nagar, Delhi, 110009
            </p>

            <div className="flex mt-3 items-center gap-2">
              <MdEmail size={22} />
              <p className="font-urbanist font-normal text-[16px]">
                connect@notesbookglobalacademy.com
              </p>
            </div>

            <div className="flex mt-3 items-center gap-2">
              <p className="font-urbanist font-normal text-[18px]">
                Contact Us:
              </p>

              <div className="flex items-center gap-3 bg-[#EC7954] px-3 py-2 rounded-full">
                <div className="bg-white p-1 rounded-full">
                  <PhoneCallIcon size={18} className="text-[#EC7954]" />
                </div>
                <span className="font-poppins tracking-wide text-[17px]">+91-9876543210</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              {[
                { Icon: FaFacebookF, bg: "bg-blue-600" },
                { Icon: FaTwitter, bg: "bg-sky-500" },
                { Icon: FaInstagram, bg: "bg-pink-500" },
                { Icon: FaYoutube, bg: "bg-red-500" },
                { Icon: FaPinterest, bg: "bg-red-600" },
              ].map(({ Icon, bg }, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 ${bg} rounded-full flex items-center justify-center hover:bg-white cursor-pointer transition`}
                >
                  <Icon className="text-lg text-white hover:text-black" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-urbanist font-bold text-[20px] mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return & Exchange",
                "Shipping Policy",
                "Shop By Category",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline font-urbanist font-normal text-[16px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-urbanist font-bold text-[20px] mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Contact Us", "Blog"].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline font-urbanist font-normal text-[16px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-urbanist font-bold text-[20px] mb-4">
              Our App
            </h3>
            <ul className="space-y-2">
              {[
                "Notesbook Global Academy - Android APP",
                "Notesbook Global Academy - IOS APP",
                "User Dashboard",
                "Daily Current Affairs",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline font-urbanist font-normal text-[16px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="font-urbanist mt-8 font-bold text-[21px]">
          Popular Searches
        </h2>

        <p className="font-urbanist font-normal text-[17px] mt-5 mb-6">
          Khan Sir Courses | UPSC and State PSC Courses | NEET-JEE-CUET Exam Courses |
          UPSC Current Affairs | Daily Current Affairs | NOTESBOOK GLOPARASABOX |
          ALUO & Monthly Current Affairs Magazine | UPSC Books |
          BPSC Preparation Books | NEET & JEE Books |
          Railway Preparation Exam Books | SSC Preparation Books |
          State PSC Exam Books |
        </p>

      </div>
    </footer>
  );
};

export default Footer;
