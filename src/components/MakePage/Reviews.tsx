import { Trip } from "@/app/rent-a-car/[make]/page";
import React from "react";

interface Props {
  props: Trip[];
}

const Reviews: React.FC<Props> = ({ props }) => {
  console.log(props);
  return (
    <div>
      <h4>Recent Reviews</h4>
    </div>
  );
};

export default Reviews;
