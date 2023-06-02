import React from "react";
import MakeCarousel from "./ContentComps/MakeCarousel";

function Content() {
  return (
    <div className="flex flex-col text-black p-3">
      <h3 className="flex items-center justify-center font-bold">
        Explore the world&apos;s largetst car sharing marketplace
      </h3>
      <div className="flex flex-row justify-center items-center">
        <MakeCarousel />
      </div>
    </div>
  );
}

export default Content;
