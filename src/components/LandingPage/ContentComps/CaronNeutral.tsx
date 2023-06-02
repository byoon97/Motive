import React from "react";

const CaronNeutral = () => {
  return (
    <div className="bg-rose-50 p-4 mt-10 mb-10pt-10 flex flex-col md:flex-row md:items-start lg:w-4/5 items-center justify-center">
      <img
        src={"/carbonfriendly1.png"}
        alt="Card Image"
        className="w-full md:w-auto h-auto rounded-lg"
      />
      <div className="md:ml-4 lg:w-1/4 flex flex-col">
        <h3 className="text-xl font-semibold my-2 text-sm text-black">
          Motive is Carbon Neutral Certified
        </h3>
        <p className="text-gray-700 text-sm">
          Drive and share cars knowing your carbon footprint is balanced out by
          greenhouse-gas-reduction projects. Carbon-neutral travel on Motive is
          now verified with a carbon neutral certification!
        </p>
        <div className="flex justify-center">
          <button className="bg-indigo-500 text-white font-semibold py-2 px-4 mt-4">
            Explore Sustainability on Motive
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaronNeutral;
