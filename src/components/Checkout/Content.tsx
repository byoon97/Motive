import React from "react";
import { useGlobalContext } from "@/app/context/store";
import { FiHome, FiThumbsUp } from "react-icons/fi";

const Content: React.FC = () => {
  const { selectedCar } = useGlobalContext();
  return (
    <div className="mx-4 flex flex-col">
      {" "}
      <div className="w-full border-b-[0.25px] mt-6"></div>
      <div className="flex flex-col my-6">
        <div className="font-bold font-sans">Meeting Location</div>
        <div className="flex flex-row">
          {" "}
          <span className="flex items-center">
            <FiHome className="mb-1 mr-2" />
          </span>
          <div className="font-sans font-light">{selectedCar?.address}</div>
        </div>
      </div>
      <div className="w-full border-b-[0.25px]"></div>
      <div className="flex flex-row mt-6 items-center">
        <FiThumbsUp className="mr-4 text-[#6E54FC]" />
        <div className="flex flex-col">
          <div className="font-bold font-sans text-sm">Free cancellation</div>
          <div className="text-xs text-[#AEAEAE]">
            Full refund before December 30, 10:30 AM in local time of the car
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
