import { useParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useRef, RefObject, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import type { Car } from "@prisma/client";
import Link from "next/link";
import MakeCard from "./MakeCard";

interface Data {
  make: string;
  cars: [
    {
      id: number;
      totalTrips: number;
      model: string;
      rating: number;
      ppd: number;
      image: string[];
      trips: {
        rating: number;
        review: string;
        endDate: Date;
        user: {
          firstName: string;
          lastName: string;
        };
      };
    }
  ];
}

const MakeCarousel: React.FC<Data> = ({ make, cars }) => {
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
    <div className="relative p-3 pt-3">
      <div className="flex shrink items-center justify-between mb-4">
        <h4 className="p-3 font-bold text-black">{make}s&apos; Available</h4>
        <div className="flex flex-row">
          <button
            onClick={scrollLeft}
            className=" hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowBack size={24} className="text-black" />
          </button>
          <button
            onClick={scrollRight}
            className=" hover:bg-gray-300 focus:outline-none"
          >
            <IoIosArrowForward size={24} className="text-black" />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex flex-row justify-evenly whitespace-nowrap carousel-container scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cars &&
          cars.map((car) => (
            <div key={car.id}>
              <Link
                href={{
                  pathname: `/rent-a-car/${car.id}`,
                  query: { keyword: car.model },
                }}
              >
                <MakeCard car={car} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MakeCarousel;
