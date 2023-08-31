/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Make } from "../../../../public/make/Cars";

type MakeCardProps = {
  make: Make;
};

const MakeCard: React.FC<MakeCardProps> = ({ make }) => {
  return (
    <div className="relative h-190 w-206 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col h-full">
        <img
          src={make.image}
          alt="Card Image"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-b-lg">
          <p className="text-sm font-semibold text-center">{make.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MakeCard;
