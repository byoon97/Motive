/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { format } from "date-fns";

interface Trip {
  rating: number;
  review: string;
  endDate: Date;
  user: {
    image: string | undefined;
    firstName: string;
  };
}

interface ReviewsProps {
  trips: Trip[];
}

const Reviews: React.FC<ReviewsProps> = ({ trips }) => {
  const renderStars = (fullStars: number, hasHalfStar: boolean) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-[#593CFB] " />);
      } else if (hasHalfStar) {
        stars.push(<FaStarHalf key={i} className="text-[#593CFB] " />);
        hasHalfStar = false; // Render only one half star
      } else {
        stars.push(<FaRegStar key={i} className="text-[#593CFB] " />);
      }
    }
    return stars;
  };
  return (
    <div className="mt-8 mx-4">
      <div className="text-[#787879] font-sans font-bold text-xs">
        RECENT REVIEWS
      </div>
      <div className="text-black mt-2">
        {trips.map((trip, index) => {
          const rating = trip.rating;
          const fullStars = Math.floor(rating);
          let hasHalfStar = rating % 1 !== 0;
          const parsedDate = new Date(trip.endDate);
          const formattedDate = format(parsedDate, "MMMM d, yyyy");

          return (
            <div key={index}>
              <div className="flex flex-row mt-4">
                <div>
                  <img
                    src={trip.user.image}
                    alt="user image"
                    className="mr-4 w-14 h-14 bg-contain inline-block box-content border-4 border-white rounded-full overflow-hidden"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    {renderStars(fullStars, hasHalfStar)}
                  </div>
                  <div className="mt-1">
                    <span className="text-xs font-sans font-bold">
                      {trip.user.firstName}
                    </span>{" "}
                    <span className="text-xs font-sans text-[#787879]">
                      {formattedDate}
                    </span>
                  </div>
                  <div className="text-sm font-sans mt-2">{trip.review}</div>
                </div>
              </div>
              <div className="w-full border-b-[0.25px] mt-6"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
