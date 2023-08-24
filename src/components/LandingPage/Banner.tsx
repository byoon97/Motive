"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  currentDateWithoutTime,
  futureDateWithoutTime,
} from "@/functions/date";
import TimeSelector from "./BannerComponents/Time";
import DatePicker from "./BannerComponents/DatePicker";
import { BsSearch } from "react-icons/Bs";

function Banner() {
  return (
    <div className="flex justify-center h-[400px] bg-[url('../../public/headerimg/442.jpeg')] md:bg-[url('../../public/headerimg/768.jpeg')] lg:bg-[url('../../public/headerimg/992.jpeg')] xl:bg-[url('../../public/headerimg/1200.jpeg')] 2xl:bg-[url('../../public/headerimg/1500.jpeg')] bg-cover bg-center bg-no-repeat text-stone-950">
      <div className="flex mt-4 bg-gray-50 md:flex-row md:w-[585px] md:rounded-[95px] md:h-[65px] sm:h-[225px] sm:flex-col sm:rounded-[10px] sm:w-[400px] shadow-md">
        <div className="flex flex-col sm:p-1.5 md:pt-2.5 md:pl-3">
          <div className="text-xs">Where</div>
          <div className="flex flex-row justify-start items-center sm:border-b md:border-none">
            <input
              className="bg-gray-50 text-sm focus:ring-0 sm:mt-1.5 cursor-pointer"
              placeholder="City, airport, address"
            ></input>
          </div>
        </div>
        <div className="flex flex-col sm:p-1.5 md:pt-2.5">
          <div className="text-xs">From</div>
          <DatePicker date={currentDateWithoutTime} />
        </div>
        <div className="flex flex-col sm:p-1.5 md:pt-2.5">
          <div className="text-xs">Until</div>
          <DatePicker date={currentDateWithoutTime} />
        </div>
        <div className="hidden md:flex items-center mt-3.5 justify-center h-[35px] rounded-[100px] md:ml-1.5 bg-indigo-600">
          <BsSearch className="text-gray-50 w-[35px] h-auto scale-75" />
        </div>
        <div className="md:hidden flex items-center justify-center pr-2">
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


