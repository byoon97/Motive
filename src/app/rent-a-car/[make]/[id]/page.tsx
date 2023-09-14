/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { makeClient } from "../../../../../lib/apollo-wrapper";
import { Car } from "@prisma/client";
import { useParams } from "next/navigation";
import { cars } from "../../../../../prisma/seedData/cars";

const GET_CAR_QUERY = gql`
  query GetCarByID($id: Int!) {
    getCarByID(id: $id) {
      make
      model
      ppd
      totalTrips
      rating
      address
      owner {
        lastName
        firstName
      }
      trips {
        rating
        review
        endDate
        user {
          firstName
        }
      }
      image
    }
  }
`;

const Page: React.FC = () => {
  const params = useParams();
  const [car, setCar] = React.useState<Car>();
  const { loading, error, data } = useQuery(GET_CAR_QUERY, {
    variables: { id: Number(params.id) }, // Replace with the desired car make
  });

  React.useEffect(() => {
    if (!loading) setCar(data.getCarByID);
  }, [loading]);

  return car ? (
    <div id="Container" className="flex flex-col">
      <div id="ImageContainer" className="">
        <img
          src={car.image[0]}
          alt=""
          className="w-screen max-h-[400px] md:object-none"
        />
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Page;
