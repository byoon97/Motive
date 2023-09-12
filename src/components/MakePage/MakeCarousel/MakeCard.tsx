/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { Car } from "@prisma/client";
import { GrFavorite } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

type MakeCardProps = {
  car: {
    id: number;
    totalTrips: number;
    model: string;
    rating: number;
    ppd: number;
    image: string[];
  };
};

const MakeCard: React.FC<MakeCardProps> = ({ car }) => {
  return (
    <div className="text-black flex shrink-0 flex-col relative w-[328px] h-[300px] rounded-lg shadow-lg cursor:pointer hover:border-blue-600 hover:border-[1px]">
      <img
        src={car.image[0]}
        alt="Card Image"
        className="w-[328px] h-[175px] object-cover rounded-t-lg"
      />
      <div className="absolute top-0 right-0 m-2 w-6 h-6 bg-stone-50 rounded-[4px] flex items-center justify-center shadow-md">
        <GrFavorite />
      </div>
      <div className="pt-[10px] px-[16px] text-black font-bold">
        {car.model}
      </div>
      <div className="flex flex-row pt-[6px] px-[16px] text-black">
        <div className="flex flex-row">
          {car.rating}{" "}
          <span className="flex items-center align-center">
            <AiFillStar color="5B3EFB" />
          </span>
        </div>
        <div>({car.totalTrips} Trips) </div>
      </div>
      <div className="mt-[16px] mx-[16px] border-t border-gray-200 pt-[16px] pb-0 flex flex-col">
        <div className="flex justify-end font-bold text-sm">${car.ppd}/day</div>
      </div>
    </div>
  );
};

export default MakeCard;
