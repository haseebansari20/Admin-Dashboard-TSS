import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-2 px-2 border-b pb-4">
      <div className="flex items-center gap-6">
        <div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
            <GiHamburgerMenu className="text-2xl text-[#C3CAD9]" />
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-[#4D5E80] font-bold">Logo here</p>
      </div>
      <div className="flex items-center gap-5">
        <IoPersonCircle className="text-2xl text-[#C3CAD9] w-9 h-7 rounded-xl" />
        <p className="text-xl text-[#6B7A99] font-bold hidden sm:block">Jack Smith</p>

        <div className="hidden sm:block">
          <div className="bg-white w-9 h-8 flex justify-center items-center rounded-[100%]">
            <FaBell className="text-xl text-[#C3CAD9]" />
          </div>
        </div>
        <div className="hidden sm:block"> 
          <div className="bg-white w-9 h-8 flex justify-center items-center rounded-[100%]">
            <RxCrossCircled className="text-2xl text-[#C3CAD9]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
