// import React from "react";
// import Navbar from "./Navbar";
// import data from "../Data/data.json";
// import Sidebar from "./Sidebar";
// import { FaArrowRightArrowLeft, FaFolderMinus } from "react-icons/fa6";
// import { IoIosSettings, IoIosArrowDown } from "react-icons/io";
// import { FaFolderPlus } from "react-icons/fa";
// import img from "../Data/images/Rectangle 34624540.png";
// import { CiFilter } from "react-icons/ci";

// const HomePage = () => {
//   return (
//     <div className="bg-[#EDEFF2] h-fit">
//       <Navbar />
//       <div className="flex mt-3">
//         <Sidebar />
//         <div className="w-full mx-3">
//           <FaArrowRightArrowLeft className="bg-white text-md w-7 rounded-xl ml-2" />
//           <div className="flex items-center">
//             <h1 className="text-3xl font-bold">Category Dash-Enviroment Tab</h1>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="text-2xl font-semibold">Overview</p>
//             <div className="flex items-center gap-1">
//               <CiFilter className="text-2xl w-9 h-7 rounded-xl" />
//               <p className="text-lg font-semibold">Filter (0)</p>
//               <IoIosArrowDown className="text-2xl w-9 h-7 rounded-xl" />
//             </div>
//           </div>

//           <div className="flex items-center justify-between h-[368px] gap-[4%]">
//             <div className="space-y-[46px]">
//               <div className="flex items-center bg-orange-600 text-white rounded-xl w-full h-[176px] justify-center">
//                 <IoIosSettings className="text-8xl" />
//                 <div>
//                   <h2 className="text-4xl">Active Brands</h2>
//                   <p className="text-4xl font-bold">56</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 mt-2">
//                 <div className=" bg-green-600 text-white rounded-xl w-[198px] h-[146px] flex justify-center items-center">
//                   <div className="space-y-3">
//                     <h2 className="text-2xl flex justify-center">
//                       Active Products
//                     </h2>
//                     <div className="flex items-center justify-between">
//                       <FaFolderPlus className="text-5xl" />
//                       <p className="text-5xl font-bold">145</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-red-600 text-white rounded-xl w-[198px] h-[146px] flex justify-center items-center">
//                   <div className="space-y-3">
//                     <h2 className="text-2xl">Inactive Products</h2>
//                     <div className="flex items-center justify-between">
//                       <FaFolderMinus className="text-5xl" />
//                       <p className="text-5xl font-bold">67</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img src={img} alt="miss" className="h-[368px] flex-1" />
//           </div>
//           <div className="flex gap-x-20 bg-white w-full mb-3 mt-3 rounded-lg">
//             <p className="underline text-orange-600 font-bold pl-7">Enviroment</p>
//             <p>Positioning</p>
//             <p>Pricing</p>
//           </div>
//           <table className="w-full bg-white rounded-lg">
//             <thead className="border-b-2">
//               <tr>
//                 <th className="p-2">Active</th>
//                 <th className="p-2">Categroy</th>
//                 <th className="p-2">Sub Category</th>
//                 <th className="p-2">Brand</th>
//                 <th className="p-2">Icon</th>
//                 <th className="p-2">Product</th>
//                 <th className="p-2">Pack Size</th>
//                 <th className="p-2">Similar Size</th>
//                 <th className="p-2">Pack Type</th>
//                 <th className="p-2">Similar Type</th>
//                 <th className="p-2">%</th>
//                 <th className="p-2">Stores</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-2 text-center"
//                 >
//                   <td className="p-2">{item.active}</td>
//                   <td className="p-2">{item.Category}</td>
//                   <td className="p-2">{item.SubCategory}</td>
//                   <td className="p-2">{item.Brand}</td>
//                   <td className="p-2">{item.Icon}</td>
//                   <td className="p-2">{item.Product}</td>
//                   <td className="p-2">{item.PackSize}</td>
//                   <td className="p-2">{item.SimilarSize}</td>
//                   <td className="p-2">{item.PackType}</td>
//                   <td className="p-2">{item.SimilarType}</td>
//                   <td className="p-2">{item.Percentage}</td>
//                   <td className="p-2">{item.StoresData}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import Navbar from "./Navbar";
// import data from "../Data/data.json";
// import Sidebar from "./Sidebar";
// import { FaArrowRightArrowLeft, FaFolderMinus } from "react-icons/fa6";
// import { IoIosSettings } from "react-icons/io";
// import { FaFolderPlus } from "react-icons/fa";
// import img from "../Data/images/project.jpg";
// import { useMediaQuery } from "react-responsive";

// const HomePage = () => {
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   if (isMobile) {
//     return (
//       <div className="bg-gray-200 h-screen">
//         <Navbar />
//         <div className="flex w-full">
//           <Sidebar className="w-1/4" />
//           <div className="flex-1">
//           <div className="flex items-center justify-between mx-5">
//             <div>
//             <div className="flex items-center bg-orange-600 text-white w-2/4 rounded">
//               <IoIosSettings className="text-6xl" />
//               <div>
//                 <h2 className="text-2xl font-bold">Active Brands</h2>
//                 <p className="text-xl">56</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 mt-2">
//               <div className=" bg-green-600 text-white rounded w-56">
//                 <h2 className="text-2xl font-bold">Active Products</h2>
//                 <div className="flex items-center gap-4">
//                   <FaFolderPlus className="text-4xl" />
//                   <p className="text-xl">145</p>
//                 </div>
//               </div>
//               <div className="bg-red-600 text-white rounded w-56">
//                 <h2 className="text-2xl font-bold">Inactive Products</h2>

//                 <div className="flex items-center gap-4">
//                   <FaFolderMinus className="text-4xl" />
//                   <p className="text-xl">67</p>
//                 </div>
//               </div>
//               </div>
//             </div>
//             <img src={img} alt="miss" className="w-100" />

//           </div>
//           <div className="flex gap-x-20 justify-center bg-white mx-5 w-full mb-3">
//             <p className="underline text-orange-600 font-bold">Enviroment</p>
//             <p>Positioning</p>
//             <p>Pricing</p>
//           </div>
//             {/* Other mobile view content */}

//             <div className="grid gap-4 mx-5">
//               {data.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white shadow-md rounded-md p-4"
//                 >
//                   <p className="font-bold">Active: {item.active}</p>
//                   <p className="font-bold">Category: {item.Category}</p>
//                   <p className="font-bold">Sub Category: {item.SubCategory}</p>
//                   <p className="font-bold">Brand: {item.Brand}</p>
//                   <p className="font-bold">Icon: {item.Icon}</p>
//                   <p className="font-bold">Product: {item.Product}</p>
//                   <p className="font-bold">Pack Size: {item.PackSize}</p>
//                   <p className="font-bold">Similar Size: {item.SimilarSize}</p>
//                   <p className="font-bold">Pack Type: {item.PackType}</p>
//                   <p className="font-bold">Similar Type: {item.SimilarType}</p>
//                   <p className="font-bold">Percentage: {item.Percentage}</p>
//                   <p className="font-bold">Stores: {item.StoresData}</p>
//                 </div>
//               ))}
//             </div>
//             {/* End of mobile view content */}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Desktop view
//   return (
//     <div className="bg-gray-200 h-screen">
//       <Navbar />
//       <div className="flex w-full">
//         <Sidebar className="w-1/4" />
//         <div className="flex-1">
//           {/* Other desktop view content */}
//           <div className="flex items-center mx-5">
//             <FaArrowRightArrowLeft className="bg-white text-xl w-7 rounded" />
//             <h1 className="text-3xl font-bold">Category Dash-Enviroment Tab</h1>
//           </div>
//           <p className="text-2xl mx-5 font-semibold">Overview</p>
//           <div className="flex items-center justify-between mx-5">
//             <div>
//             <div className="flex items-center bg-orange-600 text-white w-2/4 rounded">
//               <IoIosSettings className="text-6xl" />
//               <div>
//                 <h2 className="text-2xl font-bold">Active Brands</h2>
//                 <p className="text-xl">56</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 mt-2">
//               <div className=" bg-green-600 text-white rounded w-56">
//                 <h2 className="text-2xl font-bold">Active Products</h2>
//                 <div className="flex items-center gap-4">
//                   <FaFolderPlus className="text-4xl" />
//                   <p className="text-xl">145</p>
//                 </div>
//               </div>
//               <div className="bg-red-600 text-white rounded w-56">
//                 <h2 className="text-2xl font-bold">Inactive Products</h2>

//                 <div className="flex items-center gap-4">
//                   <FaFolderMinus className="text-4xl" />
//                   <p className="text-xl">67</p>
//                 </div>
//               </div>
//               </div>
//             </div>
//             <img src={img} alt="miss" className="w-100" />

//           </div>
//           <div className="flex gap-x-20 justify-center bg-white mx-5 w-full mb-3">
//             <p className="underline text-orange-600 font-bold">Enviroment</p>
//             <p>Positioning</p>
//             <p>Pricing</p>
//           </div>
//           {/* End of desktop view content */}

//           {/* Table */}
//           <table className="mx-5 bg-white w-full ">
//             <thead className="border-b-2 border-black">
//               <tr>
//                 <th className="p-2">Active</th>
//                 <th className="p-2">Categroy</th>
//                 <th className="p-2">Sub Category</th>
//                 <th className="p-2">Brand</th>
//                 <th className="p-2">Icon</th>
//                 <th className="p-2">Product</th>
//                 <th className="p-2">Pack Size</th>
//                 <th className="p-2">Similar Size</th>
//                 <th className="p-2">Pack Type</th>
//                 <th className="p-2">Similar Type</th>
//                 <th className="p-2">%</th>
//                 <th className="p-2">Stores</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-b-2 border-black  text-center"
//                 >
//                   <td className="p-2">{item.active}</td>
//                   <td className="p-2">{item.Category}</td>
//                   <td className="p-2">{item.SubCategory}</td>
//                   <td className="p-2">{item.Brand}</td>
//                   <td className="p-2">{item.Icon}</td>
//                   <td className="p-2">{item.Product}</td>
//                   <td className="p-2">{item.PackSize}</td>
//                   <td className="p-2">{item.SimilarSize}</td>
//                   <td className="p-2">{item.PackType}</td>
//                   <td className="p-2">{item.SimilarType}</td>
//                   <td className="p-2">{item.Percentage}</td>
//                   <td className="p-2">{item.StoresData}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* End of Table */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import Navbar from "./Navbar";
import data from "../Data/data.json";
import Sidebar from "./Sidebar";
import { FaArrowRightArrowLeft, FaFolderMinus } from "react-icons/fa6";
import { IoIosSettings, IoIosArrowDown } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa";
import img from "../Data/images/Rectangle 34624540.png";
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
          <div className="block sm:flex items-center justify-between gap-[4%]">
            <div className="space-y-auto sm:space-y-[42px]">
              <div className="h-auto w-min sm:h-[176px] flex items-center bg-[#F36B12] text-white rounded-xl sm:w-full justify-center">
                <IoIosSettings className="text-8xl" />
                <div>
                  <h2 className="text-4xl">Active Brands</h2>
                  <p className="text-4xl font-bold">56</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className=" bg-[#A9D355] text-white rounded-xl w-[198px] h-[146px] flex justify-center items-center">
                  <div className="space-y-3">
                    <h2 className="text-2xl flex justify-center">
                      Active Products
                    </h2>
                    <div className="flex items-center justify-between">
                      <FaFolderPlus className="text-5xl" />
                      <p className="text-5xl font-bold">145</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#470B0D] text-white rounded-xl w-[198px] h-[146px] flex justify-center items-center">
                  <div className="space-y-3">
                    <h2 className="text-2xl">Inactive Products</h2>
                    <div className="flex items-center justify-between">
                      <FaFolderMinus className="text-5xl" />
                      <p className="text-5xl font-bold">67</p>
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
            {" "}
            {/* Use "hidden" class to hide on non-mobile views */}
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="bg-white flex justify-center items-center p-4 rounded-lg">
            {/* Render table on non-mobile views */}
            <table className="w-full hidden sm:table">
              {/* Use "hidden" class to hide on mobile views */}
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
