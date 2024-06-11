import React from "react";
import logo from "../../../assets/logo 1.svg";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import user from "../../../assets/user.svg"

const Cart = () => {
  return (
    <>
      <div className="container">
          <div className="flex justify-between items-center p-4 md:py-4 md:px-2">
            <div className=" font-roboto ">
              <div className="flex items-center text-[10px] gap-5">
                <div className="hidden sm:block w-14 ">
                  <img src={logo} alt="" />
                </div>
                <div className="flex items-center justify-start sm:text-[14px] text-[12px] flex-col pl-1">
                  <div className="flex items-center px-1 cursor-pointer">
                    <h3>Atur Lokasi</h3>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                  <h3 className="font-semibold">Lokasi Saat ini</h3>
                </div>
              </div>
            </div>
            <div className="flex text-2xl sm:text-3xl h-8">
              <a href="">
                <IoCartOutline />
              </a>
              <a href="" className="px-2">
                <MdFavoriteBorder />
              </a>
              <div className="hidden md:block">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border flex justify-center items-center border-abu bg-white rounded-full">
                <img src={user} alt="user" className="w-4 sm:w-5" />
              </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cart;
