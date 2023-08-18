import React from "react";
import MakeCarousel from "./ContentComps/MakeCarousel";
import items from "../../../public/make/Cars";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center text-black p-3 md:px-15 lg:px-40">
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full mx-2 h-1/2 bg-violet-200 z-10"></div>
        <h3 className="lg:text-3xl font-bold relative z-20 md:text-lg">
          Explore the world&apos;s largest car sharing marketplace
        </h3>
      </div>
      <MakeCarousel items={items} />
    </div>
  );
}

export default Content;
