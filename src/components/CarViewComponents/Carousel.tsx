/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { GrFavorite } from "react-icons/gr";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const swiperRef = React.useRef<SwiperRef>();

  return (
    <div className="relative">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] max-h-[700px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-fill w-full h-fit"
              />
              <div className="hover:bg-sky-400 absolute cursor-pointer top-3 right-3 m-2 w-8 h-8 bg-stone-50 rounded-[4px] flex items-center justify-center shadow-md">
                <GrFavorite />
              </div>
              <div className="bottom-3 left-3 flex absolute items-center justify-center bg-black/50 rounded-lg h-5 w-12 border border-gray-300">
                <span className="text-xs text-white">
                  {index + 1} of {images.length}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
