import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
function Sidebar() {
  let data = useSelector((state)=>state.userloginfo.userinfo);
let name = localStorage.getItem('userinfo')
console.log(name);
  return (
    <div>
      <div className="pt-5 relative">
        <div className=" mx-auto h-[100px] w-[100px] rounded-full relative group">
          <img
            className="  mx-auto h-[100px] w-[100px] rounded-full"
            src="public/Ellipse.png"
            alt="profile"
          />
          <div className="mx-auto w-0 h-[100px] bg-[rgba(0,0,0,.7)]  absolute top-0 left-0 rounded-full  group-hover:w-[100px] flex justify-center items-center">
            <FaCloudUploadAlt className="text-[36px] text-white " />
          </div>
        </div>
      </div>
      <h1 className=" text-xl text-white font-poppins text-center mt-4">
        {data.displayName}
      </h1>
      <div className=" ml-auto mt-11 relative w-[162px] h-[90px] bg-white flex items-center justify-center  rounded-tl-lg rounded-bl-lg shadow-xl">
        <IoHomeOutline className=" text-[42px] text-[#5F35F5] mr-8" />
        <div className=" h-[90px] bg-[#5F35F5] w-2  absolute right-0 rounded-tl-lg rounded-bl-lg"></div>
      </div>
      <div className=" ml-auto mt-11 relative w-[162px] h-[90px]  flex items-center justify-center  rounded-tl-lg rounded-bl-lg ">
        <AiOutlineMessage className=" text-[42px] text-[#ffff] mr-8" />
        <div className=" h-[90px] bg-[#5F35F5] w-2  absolute right-0 rounded-tl-lg rounded-bl-lg"></div>
      </div>
      <div className=" ml-auto mt-11 relative w-[162px] h-[90px]  flex items-center justify-center  rounded-tl-lg rounded-bl-lg ">
        <FaRegBell className=" text-[42px] text-[#fff] mr-8" />
        <div className=" h-[90px] bg-[#5F35F5] w-2  absolute right-0 rounded-tl-lg rounded-bl-lg"></div>
      </div>
      <div className=" ml-auto mt-11 relative w-[162px] h-[90px]  flex items-center justify-center  rounded-tl-lg rounded-bl-lg ">
        <IoSettingsOutline className=" text-[42px] text-[#fff] mr-8" />
        <div className=" h-[90px] bg-[#5F35F5] w-2  absolute right-0 rounded-tl-lg rounded-bl-lg"></div>
      </div>
    </div>
  );
}

export default Sidebar;
