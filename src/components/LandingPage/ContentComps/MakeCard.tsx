import React from "react";
import { Make } from "../../../../public/Cars";

type MakeCardProps = {
  make: Make;
};

const MakeCard: React.FC<MakeCardProps> = ({ make }) => {
  return (
    <div className="h-190 w-206 bg-gray-200 rounded-lg">
      <img
        src={make.image}
        alt="Card Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MakeCard;
