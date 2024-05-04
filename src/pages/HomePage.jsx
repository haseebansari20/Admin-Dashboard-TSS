import React from "react";
import Navbar from "./Navbar";
import data from "../Data/data.json";
import Sidebar from "./Sidebar";
import { FaArrowRightArrowLeft, FaFolderMinus } from "react-icons/fa6";
import { IoIosSettings, IoIosArrowDown } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa";
import img from "../Data/images/project.png";
import { CiFilter } from "react-icons/ci";
import Card from "./Card";

const HomePage = () => {
  return (
    <div className="bg-[#EDEFF2] h-fit">
      <Navbar />
      <div className="flex mt-3">
        <Sidebar />
        <div className="w-full mx-3">
          <div className="hidden sm-block">
            <div className="bg-white w-7 h-7 flex justify-center items-center rounded-[100%]">
              <FaArrowRightArrowLeft className="text-md text-[#919191]" />
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="text-[20px] sm:text-3xl font-bold w-1/2">
              Category Dash-Enviroment Tab
            </h1>
          </div>
          <div className="flex justify-between items-center my-[1%]">
            <p className="text-2xl font-semibold">Overview</p>
            <div className="flex items-center gap-1">
              <CiFilter className="text-2xl w-9 h-7 rounded-xl" />
              <p className="text-lg font-semibold">Filter (0)</p>
              <IoIosArrowDown className="text-2xl w-9 h-7 rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:flex items-center justify-between gap-[4%]">
            <div className="space-y-[42px]">
              <div className="w-[3/4] flex items-center bg-[#F36B12] text-white rounded-xl justify-center h-[172px]">
                <IoIosSettings className="" size={146} />
                <div className="flex flex-col justify-between h-[123px]">
                  <h2 className="text-4xl font-semibold">Active Brands</h2>
                  <p className="text-5xl font-bold">56</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="bg-[#A9D355] text-white rounded-xl w-[267px] h-[143px] flex justify-center items-center">
                  <div className="space-y-2 w-[200px] h-[91px]">
                    <h2 className="text-2xl flex justify-center">
                      Active Products
                    </h2>
                    <div className="flex items-center justify-between">
                      <FaFolderPlus className="w-[57px] h-[44px]" />
                      <p className="text-[48px] font-bold">145</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#470B0D] text-white rounded-xl w-[267px] h-[143px] flex justify-center items-center">
                  <div className="space-y-2 w-[205px] h-[91px]">
                    <h2 className="text-2xl">Inactive Products</h2>
                    <div className="flex items-center justify-between">
                      <FaFolderMinus className="w-[57px] h-[44px]" />
                      <p className="text-[48px] font-bold">67</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={img} alt="miss" className="h-[368px] flex-1" />
          </div> 
          <div className="flex gap-x-20 bg-white w-full mb-3 mt-8 rounded-md pl-[4%]">
            <p className="border-b-2 border-orange-600 text-orange-600 font-bold">
              Enviroment
            </p>
            <p>Positioning</p>
            <p>Pricing</p>
          </div>
          <div className="grid gap-4 mx-5 sm:hidden">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="bg-white flex justify-center items-center p-4 rounded-lg">
            <table className="w-full hidden sm:table">
              <thead className="border-b-2">
                <tr>
                  <th className="p-2">Active</th>
                  <th className="p-2">Categroy</th>
                  <th className="p-2">Sub Category</th>
                  <th className="p-2">Brand</th>
                  <th className="p-2">Icon</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Pack Size</th>
                  <th className="p-2">Similar Size</th>
                  <th className="p-2">Pack Type</th>
                  <th className="p-2">Similar Type</th>
                  <th className="p-2">%</th>
                  <th className="p-2">Stores</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b-2 text-center">
                    <td className="p-4">{item.Category}</td>
                    <td className="p-4">{item.active}</td>
                    <td className="p-4">{item.SubCategory}</td>
                    <td className="p-4">{item.Brand}</td>
                    <td className="p-4">{item.Icon}</td>
                    <td className="p-4">{item.Product}</td>
                    <td className="p-4">{item.PackSize}</td>
                    <td className="p-4">{item.SimilarSize}</td>
                    <td className="p-4">{item.PackType}</td>
                    <td className="p-4">{item.SimilarType}</td>
                    <td className="p-4">{item.Percentage}</td>
                    <td className="p-4">{item.StoresData}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
