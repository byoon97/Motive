"use client";
import React, { useRef, RefObject, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CityProps, citiesArr } from "../../../public/cities/cities";
import MakeCard from "./ContentComps/MakeCard";

type CityCarouselProps = {
  cities: CityProps[];
};

const Destination: React.FC<CityCarouselProps> = () => {
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollLeft = (): void => {
    carouselRef.current?.scrollBy({
      left: -300, // Adjust the value based on your card width
      behavior: "smooth",
    });
  };

  const scrollRight = (): void => {
    carouselRef.current?.scrollBy({
      left: 300, // Adjust the value based on your card width
      behavior: "smooth",
    });
  };

  return (
    <div className="relative p-3 mt-8 md:mb-8">
      <div className="flex flex-row justify-between mb-4 w-full max-w-[1024px] mx-auto ">
        <h4 className="p-3 font-bold text-black lg:text-[30px]">
          Cities Available
        </h4>
        <div className="flex flex-row">
          <button
            onClick={scrollLeft}
            className="hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowBack size={24} className="text-black" />
          </button>
          <button
            onClick={scrollRight}
            className="hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowForward size={24} className="text-black" />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex flex-row justify-between max-w-[1055px] h-[250px] ml-6 lg:mx-auto overflow-x-auto"
      >
        {citiesArr.map((city) => (
          <div key={city.id} className="flex-shrink-0 mx-2 w-[160px]">
            {/* Add your city card component here */}
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:border-blue-600 hover:border-[1px]">
              <img
                src={city.image}
                alt={`Image`}
                className="sm:w-[120px] sm:h-[120px] rounded-lg"
              />
              <h5 className="text-sm font-bold mt-4 text-black font-sans">
                {city.cityName}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;


