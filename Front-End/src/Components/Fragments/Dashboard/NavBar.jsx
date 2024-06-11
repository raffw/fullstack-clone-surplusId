import React from "react";
import Cart from "../../Elements/Navbar/Cart"
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
     <div className="bg-hijau text-white rounded-br-[2rem] rounded-bl-[2rem]">
        <Cart/>
        <div className="flex justify-center text-hijau font-roboto text-sm sm:text-md ">
          <form
            action=""
            className="w-3/4 flex justify-between py-1 items-center border rounded-md md:border-2 bg-white absolute top-14 sm:top-16 "
          >
            <input
              type="text"
              className="outline-none rounded-sm w-full px-2 h-full py-1"
              placeholder="Mau makan apa hari ini?"
            />
            <a href="" className="text-xl">
              <IoSearch />
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default NavBar;
