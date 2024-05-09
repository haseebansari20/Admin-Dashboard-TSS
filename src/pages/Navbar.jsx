import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  return (
    // <div className="flex justify-between border-b items-center h-[90px] sm:ml-6 ml-3 mr-5">
    //   <div className="flex items-center sm:w-[181px] w-[150px] justify-between h-[50px]">
    //     <div>
    //       <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //         <GiHamburgerMenu className="text-2xl text-[#C3CAD9]" />
    //       </div>
    //     </div>
    //     <p className="sm:text-2xl text-xl text-[#4D5E80] font-bold">Logo here</p>
    //   </div>
    //   <div className="flex items-center gap-5 h-[50px]">
    //     <IoPersonCircle className="text-2xl text-[#C3CAD9] w-9 h-7 rounded-xl" />
    //     <p className="text-xl text-[#6B7A99] font-bold hidden sm:block">Jack Smith</p>

    //     <div className="hidden sm:block">
    //       <div className="bg-white w-9 h-8 flex justify-center items-center rounded-[100%]">
    //         <FaBell className="text-xl text-[#C3CAD9]" />
    //       </div>
    //     </div>
    //     <div className="hidden sm:block"> 
    //       <div className="bg-white w-9 h-8 flex justify-center items-center rounded-[100%]">
    //         <RxCrossCircled className="text-2xl text-[#C3CAD9]" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-between border-b items-center w-full h-[9vh] sm:px-6 px-3">
      <div className="flex items-center justify-between sm:gap-6 gap-3" >
        <div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
            <GiHamburgerMenu className="sm:text-2xl text-xl text-[#C3CAD9]" />
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-[#4D5E80] font-bold">Logo here</p>
      </div>
      <div className="flex items-center gap-5 h-[50px]">
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
