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
          <div className="my-2">
            <div className="bg-white w-7 h-7 flex justify-center items-center rounded-[100%]">
              <FaArrowRightArrowLeft  className="text-gray-400"/>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="text-xl sm:text-3xl font-bold w-1/2">
              Category Dash-Enviroment Tab
            </h1>
          </div>
          <div className="flex justify-between items-center my-[1%]">
            <p className="sm:text-2xl text-xl font-semibold">Overview</p>
            <div className="flex items-center gap-1">
              <CiFilter className="sm:text-2xl text-xl w-9 h-7 rounded-xl" />
              <p className="sm:text-lg text-md font-semibold">Filter (0)</p>
              <IoIosArrowDown className="sm:text-2xl text-xl w-9 h-7 rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:flex items-center justify-between gap-[4%]">
            <div className="sm:space-y-[42px] gap-[6px] sm:block">
              <div className="sm:w-full flex items-center bg-[#F36B12] text-white rounded-xl justify-center sm:h-[172px] h-[120px]">
                <IoIosSettings className="sm:text-9xl text-6xl" />
                <div className="flex flex-col justify-between sm:h-[123px] h-[91px]">
                  <h2 className="sm:text-4xl text-xl font-semibold">Active Brands</h2>
                  <p className="sm:text-5xl text-2xl font-bold">56</p>
                </div>
              </div>
              <div className="flex items-center sm:gap-4 gap-[6px] mt-2">
                <div className="bg-[#A9D355] text-white rounded-xl sm:w-[267px] sm:h-[143px] w-1/2 h-[120px] flex justify-center items-center">
                  <div className="space-y-2 sm:w-[205px] w-[170px] h-[91px]">
                    <h2 className="sm:text-2xl text-xl">Inactive Products</h2>
                    <div className="flex items-center justify-between">
                      <FaFolderPlus className="sm:w-[57px] sm:h-[44px] text-5xl" />
                      <p className="sm:text-[48px] text-2xl font-bold">67</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#470B0D] text-white rounded-xl sm:w-[267px] sm:h-[143px] w-1/2 h-[120px] flex justify-center items-center">
                  <div className="space-y-2 sm:w-[205px] w-[170px] h-[91px]">
                    <h2 className="sm:text-2xl text-xl">Inactive Products</h2>
                    <div className="flex items-center justify-between">
                      <FaFolderMinus className="sm:w-[57px] sm:h-[44px] text-5xl" />
                      <p className="sm:text-[48px] text-2xl font-bold">145</p>
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
