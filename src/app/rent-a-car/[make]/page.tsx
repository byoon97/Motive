"use client";
import Banner from "@/components/MakePage/Banner";
import Content from "@/components/MakePage/Content";
import MakeCarousel from "@/components/MakePage/MakeCarousel/Carousel";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { makesDescArr } from "../../../../public/make/makesArr";
import Reviews from "@/components/MakePage/ReviewComponents/Reviews";

const GetCarByMake = gql`
  query GetCarByMake($make: String!) {
    getCarByMake(make: $make) {
      id
      totalTrips
      model
      rating
      ppd
      image
      trips {
        rating
        review
        startDate
        endDate
        user {
          firstName
          lastName
          host
        }
      }
    }
  }
`;

export interface Trip {
  rating: number;
  review: string;
  startDate: Date;
  endDate: Date;
  model: string;
  user: {
    firstName: string;
    lastName: string;
  };
}

export default function MakePage() {
  const params = useParams();
  const [trips, setTrips] = useState<Trip[]>([]);
  const {
    loading,
    error,
    data: cars,
  } = useQuery(GetCarByMake, {
    variables: { make: params.make }, // Replace with the desired car make
  });

  const make = Array.isArray(params.make) ? params.make[0] : params.make;
  const carData = makesDescArr.filter((car) => car.name === make)[0];

  useEffect(() => {
    const tripsArr = () => {
      let arr: Trip[] = [];
      cars.getCarByMake.forEach((car: { model: string; trips: any[] }) => {
        car.trips.forEach((trip) => {
          arr.push({ ...trip, model: car.model });
        });
        setTrips(arr);
      });
    };
    if (!loading) {
      tripsArr();
    }
    console.log(trips);
  }, [loading]);

  return (
    <div className="flex flex-col font-['RlFreight']">
      <Banner make={make} />
      {loading ? null : <MakeCarousel make={make} cars={cars.getCarByMake} />}
      <Content props={carData} />
      {loading ? null : <Reviews props={trips} />}
    </div>
  );
}
