import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";

interface PageProps {
  host: {
    rating: number;
    image: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    allStar: boolean;
    totalTrips: number;
  };
}

const Host: React.FC<PageProps> = ({ host }) => {
  console.log(host);
  return (
    <div className="flex flex-col text-black mx-4 mt-6">
      <div className="flex justify-start text-xs font-bold font-sans">
        HOSTED BY
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center mr-6">
          <img
            src={host.image}
            alt=""
            className="w-20 h-20 bg-contain inline-block box-content border-4 border-white rounded-full overflow-hidden"
          />
          <div className=" border-[1px] absolute flex flex-row mt-[65px] items-center justify-center px-2 w-16 bg-white rounded-[100px] shadow-lg">
            <div className="text-sm font-thin font-sans mr-[1px]">
              {host.rating}
            </div>
            <FaStar className="text-[#593CFB] mb-[3px]" />
          </div>
        </div>

        <div className="flex flex-col font-sans">
          <div className="font-bold mb-2">
            {host.firstName} {host.lastName}
          </div>
          {host.allStar ? (
            <div className="flex flex-row mb-1">
              <FaMedal className="text-[#593CFB] mr-1" />
              <div className="text-xs">All-Star Host</div>
            </div>
          ) : null}
          <div className="">
            {host.totalTrips} Trips - Joined {}
          </div>
          <div className="text-xs color-gray mt-[3px]">
            Typically responds in 5 minutes
          </div>
        </div>
      </div>

      {host.allStar ? (
        <div className="flex flex-row mt-4">
          <FaMedal className="text-[#593CFB] mr-2" size={"2em"} />
          <div className="flex flex-col font-sm font-sans">
            <div className="text-[15px]">
              All-Star Hosts like Stephanie Jen are the top-rated and most
              experienced hosts on Turo.
            </div>
            <div className="font-bold text-[#593CFB]">Learn more</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Host;
