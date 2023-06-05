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
    <div className="object-center text-black pb-8 bg-white lg:ml-60">
      <div className="relative lg:w-4/5">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="lg:pr-80">
            <button
              className="absolute top-4 right-4 bg-white hover:opacity-100 transition-opacity duration-300 "
              onClick={scrollRight}
            >
              <IoIosArrowForward size={24} />
            </button>
            <button
              className="absolute top-4 right-14 bg-white hover:opacity-100 transition-opacity duration-300 "
              onClick={scrollLeft}
            >
              <IoIosArrowBack size={24} />
            </button>
          </div>
          {exps.map((experience) => (
            <div
              key={experience.id}
              className="flex-none w-full snap-start sm:w-auto sm:flex-shrink-0 sm:mx-2"
              style={{ width: "100%" }}
            >
              <div className="pt-16">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
