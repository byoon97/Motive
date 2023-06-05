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
    <div className="flex flex-col text-black ">
      <div className="p-3 flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-between mb-4 sm:w-[80%] md:w-[65%] xl:w-[50%]">
          <h4 className="p-3 font-bold">Browse by Destination</h4>
          <div className="flex flex-row">
            <button
              className="hover:bg-gray-300 focus:outline-none"
              onClick={scrollLeft}
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              className="hover:bg-gray-300 focus:outline-none"
              onClick={scrollRight}
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
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
    </div>
  );
};

export default Experiences;
