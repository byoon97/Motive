"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ExperienceCard from "./ExperienceComps/ExperienceCard";
import { exps } from "../../../public/experiences/Experiences";

const Experiences: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col text-black p-3 sm:mb-8 lg:px-[15%] xl:px-[25%]">
      <div className="relative p-3">
        <style>
          {`.carousel-container 
            {
             overflow-x: hidden;
            }
          `}
        </style>
        {/* start of arrows component */}
        {/* start of arrows component */}
        {/* start of arrows component */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full mx-2 h-1/2 bg-violet-200 z-10"></div>
            <h3 className="lg:text-3xl m:text-lg sm:text-small font-bold relative z-20">
              Browse by Experience
            </h3>
          </div>
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
      </div>
      {/* start of carousel component */}
      {/* start of carousel component */}
      {/* start of carousel component */}
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {exps.map((experience) => (
          <div
            key={experience.id}
            className="flex-none w-full snap-start sm:w-auto sm:flex-shrink-0 sm:mx-2"
            style={{ width: "100%" }}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

