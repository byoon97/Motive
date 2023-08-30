/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsCarFront } from "react-icons/Bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiFilePaperLine } from "react-icons/ri";
import { GiRoad } from "react-icons/Gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between p-3 max-w-7xl mx-auto h-14">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/Motive.png"
            alt="Motive Logo"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5 text-stone-950">
        <div className="hidden md:block border-[1px] border-black text-xs px-2 py-1 hover:bg-gray-200 cursor-pointer">
          Become a host
        </div>
        <div className="relative inline-block text-left">
          <div
            className="flex flex-row items-center justify-evenly w-16 h-8 px-2 rounded-md py-1 hover:bg-gray-200 cursor-pointer"
            onClick={toggleDropdown}
          >
            <RxHamburgerMenu className="text-xl" />
            <CgProfile className="text-xl" />
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-3 w-[300px] h-70 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/login">
                  {" "}
                  <p className="cursor-pointer font-insignia text-sm pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                    Log In
                  </p>
                </Link>

                <Link href="reigster">
                  {" "}
                  <p className="cursor-pointer font-insignia text-sm pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                    Sign Up
                  </p>
                </Link>

                <div className="flex flex-row items-center pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                  <BsCarFront className="" />
                  <p className="cursor-pointer font-insignia text-sm pl-2">
                    Become a Host
                  </p>
                </div>
                <div className="border-t border-gray-300 my-2 mx-2"></div>
              </div>
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="flex flex-row items-center pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                  <CgProfile />
                  <p className="cursor-pointer font-insignia text-sm pl-2">
                    Profile
                  </p>
                </div>
                <div className="flex flex-row items-center pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                  <AiOutlineHeart />
                  <p className="cursor-pointer font-insignia text-sm pl-2">
                    Favorites
                  </p>
                </div>
                <div className="flex flex-row items-center pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                  <GiRoad className="" />
                  <p className="cursor-pointer font-insignia text-sm pl-2">
                    Trips
                  </p>
                </div>
                <div className="border-t border-gray-300 my-2 mx-2"></div>
              </div>
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="flex flex-row items-center pl-4 py-1.5 hover:bg-gray-200 m-1 rounded-lg">
                  <RiFilePaperLine className="" />
                  <p className="cursor-pointer font-insignia text-sm pl-2">
                    Legal
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
