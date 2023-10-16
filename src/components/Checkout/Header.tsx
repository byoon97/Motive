/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useGlobalContext } from "@/app/context/store";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

interface PageProps {}

const Header: React.FC<PageProps> = () => {
  const {
    daysRenting,
    selectedCar,
    pickUpTime,
    returnTime,
    selectedDate,
    selectedReturnDate,
  } = useGlobalContext();

  return (
    <div className="text-black flex flex-col mx-4 mt-6">
      <div className="font-bold font-sans text-2xl">Checkout</div>
      <div className="flex flex-row space-between mt-6">
        <div className="flex flex-col w-1/2">
          <div className="text-xs font-sans">
            {selectedCar?.owner.firstName}'s
          </div>
          <div className="font-bold text-lg font-sans">
            {selectedCar?.model}
          </div>
          <div className="flex flex-row space-x-1 items-center">
            <span className="font-bold font-sans">{selectedCar?.rating}</span>
            <span className="flex items-center justify-center mb-1 text-sm text-[#593DFB]">
              <FaStar />
            </span>
            <span className="text-sm font-sans">
              ({selectedCar?.totalTrips} trips)
            </span>
          </div>

          <div className="flex flex-row items-center mt-4">
            <div className="flex flex-col mr-4">
              <div className="font-bold text-sm font-sans">
                {new Date(selectedDate).toLocaleDateString()}
              </div>
              <div className="font-thin font-sans text-gray-500 text-sm">
                {pickUpTime}
              </div>
            </div>

            <TiArrowRightThick className="mr-4" />

            <div className="flex flex-col">
              <div className="font-bold text-sm font-sans">
                {new Date(selectedReturnDate).toLocaleDateString()}
              </div>
              <div className="font-thin font-sans text-gray-500 text-sm">
                {returnTime}
              </div>
            </div>
          </div>
        </div>

        {/* host image and car image */}
        <div className="flex flex-row w-1/2 items-start justify-end">
          <img
            className="w-[105px] h-[66px] object-contain"
            src={selectedCar?.image[0]}
            alt=""
          />

          <div className="flex flex-col items-center justify-center ml-[-30px]">
            {" "}
            <img
              className="w-[48px] h-[48px] rounded-[100px] mb-[-10px]"
              src={selectedCar?.owner?.image}
              alt=""
            />
            <div className=" border-[1px] absolute flex flex-row mt-[65px] items-center justify-center px-2 w-16 bg-white rounded-[100px] shadow-lg">
              <div className="text-sm font-thin font-sans mr-[1px]">
                {selectedCar?.owner?.rating}
              </div>
              <FaStar className="text-[#593CFB] mb-[3px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
