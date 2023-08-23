"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  currentDateWithoutTime,
  futureDateWithoutTime,
} from "@/functions/date";
import TimeSelector from "./BannerComponents/Time";
import DatePicker from "./BannerComponents/DatePicker";
import { AiOutlineSearch } from "react-icons/Ai";

function Banner() {
  return (
    <div className="flex justify-center h-[400px] bg-[url('../../public/headerimg/442.jpeg')] md:bg-[url('../../public/headerimg/768.jpeg')] lg:bg-[url('../../public/headerimg/992.jpeg')] xl:bg-[url('../../public/headerimg/1200.jpeg')] 2xl:bg-[url('../../public/headerimg/1500.jpeg')] bg-cover bg-center bg-no-repeat text-stone-950">
      <div className="flex mt-4 bg-gray-50 md:flex-row md:w-[585px] md:rounded-[100px] md:h-[56px] sm:h-[225px] sm:flex-col sm:rounded-[10px] sm:w-[400px]">
        <div className="flex flex-col sm:p-1.5">
          <div className="text-xs">Where</div>
          <div className="flex flex-row justify-start items-center sm:border-b md:border-none">
            <div className="bg-gray-50 cursor-pointer">
              <div className="w-full">
                <input
                  className="bg-gray-50 text-sm border-transparent focus:border-transparent focus:ring-0 rounded-[5px] sm:mt-1.5"
                  placeholder="City, airport, address"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:p-1.5">
          <div className="text-xs">From</div>
          <DatePicker date={currentDateWithoutTime} />
        </div>
        <div className="flex flex-col sm:p-1.5">
          <div className="text-xs">Until</div>
          <DatePicker date={currentDateWithoutTime} />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-center h-[56px] md:ml-2.5 text-xs">
            <AiOutlineSearch className="bg-indigo-600 text-white rounded-[100px] w-[35px] h-[35px]" />
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center pl-2 pr-2">
          <button className="h-10  w-full bg-indigo-600 text-gray-50">
            Search for Cars
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

<div className="flex items-center justify-center p-2">
  <button className="h-10  w-full bg-indigo-500 text-gray-50 rounded-lg">
    Search for Cars
  </button>
</div>; 


