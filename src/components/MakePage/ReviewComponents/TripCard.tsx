import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

interface Props {
  trip: {
    endDate: Date;
    rating: number;
    review: string;
    model: string;
    user: {
      firstName: string;
      lastName: string;
    };
  };
}

const TripCard: React.FC<Props> = ({ trip }) => {
  const endDate = new Date(trip.endDate); // Convert the endDate string to a Date object
  const formattedEndDate = endDate.toLocaleDateString();
  const rating = trip.rating;
  const fullStars = Math.floor(rating);
  let hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
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
    <div
      id="Card"
      className="font-sans w-[328px] h-[222px] bg-white rounded-md flex flex-row justify-center pt-6"
    >
      <div id="ImageContainer" className="mr-8">
        Image
      </div>
      <div id="ContentContainer" className="flex flex-col w-[200px]">
        <div id="RatingContainer" className="flex flex-row mb-1">
          {renderStars()}
        </div>
        <div id="Model" className="text-[#593CFB] font-bold mb-3">
          {trip.model}
        </div>
        <div id="Review" className="text-[15px] mb-10">
          {trip.review}
        </div>
        <div id="User">
          <span className="text-[13px] font-bold">
            {trip.user.firstName} {trip.user.lastName} -
          </span>
          <span className="text-[13px] text-[#707070]">
            {" "}
            {formattedEndDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
