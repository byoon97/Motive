import { Trip } from "@/app/rent-a-car/[make]/page";
import React, { useRef, RefObject, useState, useEffect } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TripCard from "./TripCard";

interface Props {
  props: Trip[];
}

const Reviews: React.FC<Props> = ({ props }) => {
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollLeft = (): void => {
    carouselRef.current?.scrollBy({
      left: -344,
      behavior: "smooth",
    });
  };

  const scrollRight = (): void => {
    carouselRef.current?.scrollBy({
      left: 344,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-black bg-[#F9F4FF] h-[400px] lg:h-[420px] relative">
      <div className="flex flex-row justify-between mb-4 w-full max-w-[1024px] mx-auto mt-12">
        <h3 className="lg:text-3xl m:text-lg sm:text-base font-bold ml-6">
          Recent Reviews
        </h3>

        <div className="flex flex-row mr-4">
          <button
            onClick={scrollLeft}
            className="hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
      <div
        id="CarouselContainer"
        className="flex flex-row max-w-[1024px] ml-6 lg:mx-auto overflow-x-auto"
        ref={carouselRef}
      >
        {props.map((trip, index) => (
          <div key={index} className="w-[328px] flex-shrink-0 mr-4">
            <TripCard trip={trip} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
