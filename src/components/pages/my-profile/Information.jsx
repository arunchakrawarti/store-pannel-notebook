import Input from "@/components/atoms/Input";
import { Plus } from "lucide-react";
import React from "react";

const AddAddress = () => {
  const countries = ["India", "USA", "Canada"];
  const states = ["Delhi", "Bihar", "Punjab", "UP"];

  return (
    <div className="container mx-auto  py-6 sm:py-10 md:py-16">
      <div className="inline-flex items-center bg-[#2E3192] rounded-md py-2 px-4 text-white gap-2 cursor-pointer hover:bg-[#1f236f] transition">
        <Plus size={18} />
        <span className="font-poppins font-medium cursor-pointer text-sm sm:text-base">
          Add Address
        </span>
      </div>

      <form className="">
        <div className="grid mt-5 grid-cols-1  lg:grid-cols-3 gap-4">
          <Input label="Name" placeholder="Enter your name" />
        <Input label="Contact Number" placeholder="Enter contact number" />
        <Input label="Email" type="email" placeholder="Enter email" />
        </div>
       <div className="grid mt-5 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
         <Input label="Address" placeholder="Enter address" />
       </div>
        <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-4">
          <Input label="Landmark" placeholder="Enter landmark" />
        <Input label="PIN Code" placeholder="Enter PIN code" />
        <Input label="City" placeholder="Enter city" />
        </div>
        <div className="grid mt-5 grid-cols-1  lg:grid-cols-2 gap-4">
          <Input
          label="Country"
          type="select"
          options={countries}
          placeholderOption="Select Country"
        />
        <Input
          label="State"
          type="select"
          options={states}
          placeholderOption="Select State"
        />
        </div>
      </form>

      <div className="mt-2">
        <button className="bg-[#2E3192] text-white px-7 cursor-pointer py-2 rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddAddress;
