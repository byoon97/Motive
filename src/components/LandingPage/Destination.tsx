"use client";
import React, { useRef, RefObject, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CityProps, citiesArr } from "../../../public/cities/cities";
import MakeCard from "./ContentComps/MakeCard";

type CityCarouselProps = {
  cities: CityProps[];
};

const Destination: React.FC<CityCarouselProps> = () => {
  const [visibleCards, setVisibleCards] = useState(2); // Number of visible cards based on screen size
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

  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCards = 5; // Default to largest screen size

    if (screenWidth < 640) {
      newVisibleCards = 2; // Small screen size
    } else if (screenWidth < 768) {
      newVisibleCards = 3; // Medium screen size
    } else if (screenWidth < 1024) {
      newVisibleCards = 4; // Medium screen size (alternative)
    }

    setVisibleCards(newVisibleCards);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <div className="h-full flex flex-col text-black p-3 md:px-[75px] lg:px-[15%] xl:px-[25%]">
      <div className="relative p-3">
        <style>
          {`
      .carousel-container {
        overflow-x: hidden;
      }
    `}
        </style>
        <div className="flex items-center justify-between mb-4">
          <h4 className="p-3 font-bold">Browse by Destination</h4>
          <div className="flex flex-row">
            <button
              onClick={scrollLeft}
              className=" hover:bg-gray-300 focus:outline-none"
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              onClick={scrollRight}
              className=" hover:bg-gray-300 focus:outline-none"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto whitespace-nowrap carousel-container scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {citiesArr.map((city) => (
            <div
              key={city.id}
              className={`flex-shrink-0 mx-1 ${
                visibleCards === 2
                  ? "w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
                  : visibleCards === 3
                  ? "w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"
                  : visibleCards === 4
                  ? "w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4"
                  : "w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5"
              }`}
            >
              <div className="relative sm:w-[156px] sm:h-[188px] rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col h-ful items-center justify-center sm:mt-4">
                  <img
                    src={city.image}
                    alt="Card Image"
                    className="sm:w-[120px] sm:h-[120px] rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-black p-2 rounded-b-lg">
                    <p className="text-sm font-semibold text-center">
                      {city.cityName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
