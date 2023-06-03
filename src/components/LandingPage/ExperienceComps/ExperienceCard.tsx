import React from "react";
import { Experience } from "../../../../public/Experiences";

type CardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<CardProps> = ({ experience }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto object-center text-black sm:pb-8 sm:p-6 lg:px-8 sm:px-8">
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <img
          src={experience.image}
          alt="Card Image"
          className="h-auto object-cover sm:w-[274px] sm:h-[193px] sm:pt-4 md:w-[389.44px] md:h-[265.86px] lg:w-[389.44px] lg:h-[265.86px] lg:mr-4"
        />
        <div className="lg:w-1/2 p-4 sm:px-4 sm:w-80 md:pl-8 lg:pl-10 sm:flex sm:flex-col sm:items-center sm:justify-center lg:items-start">
          <h3 className="text-xl font-semibold my-2">
            {experience.title}{" "}
            <span className="text-indigo-600">{experience.title2}</span>
          </h3>
          <p className="text-gray-700 mb-4">{experience.body}</p>
          <div className="flex sm:items-center sm:justify-center">
            <button className="bg-indigo-600 text-white font-semibold py-3 px-5">
              Browse Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
