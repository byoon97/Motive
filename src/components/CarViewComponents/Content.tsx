import React from "react";

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
  React.useEffect(() => {}, []);
  return (
    <div className="text-black mt-[5%] ml-[1%]">
      <div className="flex flex-col">
        <div className=" font-bold font-sans text-base">
          {d.make} {d.model}
        </div>
        <div></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
