"use client";
import React, { useRef, RefObject, useState, useEffect } from "react";
import items from "../../../../public/Cars";
import MakeCard from "./MakeCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type MakeCarouselProps = {};

const MakeCarousel: React.FC<MakeCarouselProps> = () => {
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
    <div className="relative p-3">
      <div className="flex items-center justify-between mb-4">
        <h4 className="p-3 font-bold">Browse by Make</h4>
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
        className="flex overflow-x-auto whitespace-nowrap"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((make) => (
          <div
            key={make.id}
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
            <MakeCard make={make} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeCarousel;
