import React from "react";
import DateSelector from "./DateSelector";
import ContentFillter from "./ContentFiller";

interface CarProps {
  details: {
    make: string;
    model: string;
    ppd: number;
    totalTrips: number;
    rating: number;
    address: string;
  };
}

const Content: React.FC<CarProps> = ({ details: d }) => {
  return (
    <div className="text-black mt-[5%]">
      <DateSelector />
      <div className="w-full border-b-[0.25px] mt-6"></div>
      <ContentFillter address={d.address} />
      <div className="w-full border-b-[0.25px] mt-6"></div>
    </div>
  );
};

export default Content;
