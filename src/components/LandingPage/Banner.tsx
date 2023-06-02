"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  currentDateWithoutTime,
  futureDateWithoutTime,
} from "@/functions/date";
import TimeSelector from "./BannerComponents/Time";
import DatePicker from "./BannerComponents/DatePicker";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-gray-200 py-10 lg:py-10 text-stone-950">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-blac decoration-w-4">
            Motive.
          </span>{" "}
          Find Your Drive.
        </h1>
        {/* Car Selector */}
        {/* Car Selector */}
        {/* Car Selector */}
        <div className="flex flex-col w-96 bg-gray-50 rounded-lg">
          <div className="flex flex-col p-2 border-b border-black">
            <div className="text-xs pb-1">Where</div>
            <input
              className="bg-gray-50 border-transparent focus:border-transparent focus:ring-0"
              placeholder="City, airport, address, or hotel"
            ></input>
          </div>
          <DatePicker date={currentDateWithoutTime} />
          <DatePicker date={futureDateWithoutTime} />
          <div className="flex items-center justify-center p-2">
            <button className="h-10  w-full bg-indigo-500 text-gray-50 rounded-lg">
              Search for Cars
            </button>
          </div>
        </div>
      </div>
      {/* <Image
        className="hidden:md-inline-flex h-32 lg:h-full"
        src="/fleet.jpeg"
        height="400"
        width="200"
        alt=""
      /> */}
    </div>
  );
}

export default Banner;
