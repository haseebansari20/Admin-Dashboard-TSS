import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const Sidebar = () => {
  return (
    // <div className="hidden sm:flex flex-col mt-4 w-[99px] items-center gap-14">
    //   <div className="">
    //     <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //       <AiFillHome className=" text-2xl text-[#919191]" />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //       <IoApps className=" text-2xl text-[#C5C2C2]" />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //       <FaBookOpen className=" text-2xl text-[#C5C2C2]" />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //       <CgProfile className=" text-2xl text-[#C5C2C2]" />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
    //       <SiHomeassistantcommunitystore className=" text-2xl text-[#C5C2C2]" />
    //     </div>
    //   </div>
    // </div>
    <div className="hidden sm:flex flex-col px-6 mt-4 items-center gap-14">
    <div className="">
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
        <AiFillHome className=" text-2xl text-[#919191]" />
      </div>
    </div>
    <div>
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
        <IoApps className=" text-2xl text-[#C5C2C2]" />
      </div>
    </div>
    <div>
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
        <FaBookOpen className=" text-2xl text-[#C5C2C2]" />
      </div>
    </div>
    <div>
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
        <CgProfile className=" text-2xl text-[#C5C2C2]" />
      </div>
    </div>
    <div>
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-[100%]">
        <SiHomeassistantcommunitystore className=" text-2xl text-[#C5C2C2]" />
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
