import React from "react";
import MakeCarousel from "./ContentComps/MakeCarousel";
import items from "../../../public/make/Cars";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center text-black p-3 md:px-15 mt-6 lg:px-40 md:my-12">
      <h1 className="text-4xl md:text-7xl font-normal text-center p-3 lg:p-5 font-headerFont">
        Motive, find your drive.
      </h1>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full mx-2 h-1/2 bg-violet-200 z-10"></div>
        <h3 className="lg:text-3xl relative z-20 md:text-lg">
          Explore the world&apos;s largest car sharing marketplace
        </h3>
      </div>
      <MakeCarousel items={items} />
    </div>
  );
}

export default Content;
