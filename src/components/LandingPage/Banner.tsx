"use client";
import React from "react";
import { useSession } from "next-auth/react";
import SearchBar from "../DateTimeComponents/SearchBar";

function Banner() {
  return (
    <div className="flex justify-center h-[400px] bg-[url('../../public/headerimg/442.jpeg')] md:bg-[url('../../public/headerimg/768.jpeg')] lg:bg-[url('../../public/headerimg/992.jpeg')] xl:bg-[url('../../public/headerimg/1200.jpeg')] 2xl:bg-[url('../../public/headerimg/1500.jpeg')] bg-cover bg-center bg-no-repeat text-stone-950">
      <SearchBar />
    </div>
  );
}

export default Banner;



