import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

function UserList() {
  return (
    <div className=" w-[430px] h-[350px ml-5 ">
            <div className=" p-[10px] rounded-xl">
                <div className=" flex justify-between">
                    <h1 className=" font-poppins text-[20px] font-semibold">
                    User List
                    </h1>
                    <BsThreeDotsVertical className=" text-xl" />
                </div>
                <div className=" shadow-2xl overflow-y-scroll h-[350px] rounded-2xl p-3">

                    <div className="flex justify-between mt-5 items-center  border-b-2 pb-4">
                        <div>
                            <img src="public/Ellipse1.png" alt="" />
                        </div>
                        <div>
                            <h1 className=" text-[16px] font-poppins font-semibold">
                                Friends Reunion
                            </h1>
                            <p className=" text-[#4D4D4D] text-[14px] font-poppins font-medium">
                                Hi Guys, Wassup!
                            </p>
                        </div>
                        <div>
                            <button className=" bg-[#5F35F5] text-white text-[20px] font-semibold font-poppins rounded-md p-2 ">
                                Accept
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 items-center  border-b-2 pb-4">
                        <div>
                            <img src="public/Ellipse1.png" alt="" />
                        </div>
                        <div>
                            <h1 className=" text-[16px] font-poppins font-semibold">
                                Friends Reunion
                            </h1>
                            <p className=" text-[#4D4D4D] text-[14px] font-poppins font-medium">
                                Hi Guys, Wassup!
                            </p>
                        </div>
                        <div>
                            <button className=" bg-[#5F35F5] text-white text-[20px] font-semibold font-poppins rounded-md p-2 ">
                                Accept
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 items-center  border-b-2 pb-4">
                        <div>
                            <img src="public/Ellipse1.png" alt="" />
                        </div>
                        <div>
                            <h1 className=" text-[16px] font-poppins font-semibold">
                                Friends Reunion
                            </h1>
                            <p className=" text-[#4D4D4D] text-[14px] font-poppins font-medium">
                                Hi Guys, Wassup!
                            </p>
                        </div>
                        <div>
                            <button className=" bg-[#5F35F5] text-white text-[20px] font-semibold font-poppins rounded-md p-2 ">
                                Accept
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 items-center  border-b-2 pb-4">
                        <div>
                            <img src="public/Ellipse1.png" alt="" />
                        </div>
                        <div>
                            <h1 className=" text-[16px] font-poppins font-semibold">
                                Friends Reunion
                            </h1>
                            <p className=" text-[#4D4D4D] text-[14px] font-poppins font-medium">
                                Hi Guys, Wassup!
                            </p>
                        </div>
                        <div>
                            <button className=" bg-[#5F35F5] text-white text-[20px] font-semibold font-poppins rounded-md p-2 ">
                                Accept
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default UserList