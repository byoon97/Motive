import React from "react";
import { FaStar } from "react-icons/fa";

interface PageProps {
  make: string;
  model: string;
  rating: number;
  trips: number;
}

const Header: React.FC<PageProps> = ({ make, model, rating, trips }) => {
  return (
    <div id="HeaderContainer" className="flex flex-col mb-4 mt-[5%] mx-[2.5%]">
      <div className=" font-bold font-sans text-base mb-1 lg:text-4xl">
        {make} {model}
      </div>
      <div className="flex flex-row text-sm items-center lg:text-xl">
        <div className="">{rating}</div>
        <div className="text-[#593CFB] mr-1.5 flex items-center pb-[0.5%]">
          <FaStar />
        </div>
        <div className="font-sans font-thin lg:text-base">({trips} trips)</div>
      </div>
    </div>
  );
};

export default Header;
