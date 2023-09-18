/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Carousel from "@/components/CarViewComponents/Carousel";
import Content from "@/components/CarViewComponents/Content";
import Host from "@/components/CarViewComponents/Host";

const GET_CAR_QUERY = gql`
  query GetCarByID($id: Int!) {
    getCarByID(id: $id) {
      make
      model
      ppd
      totalTrips
      rating
      address
      image
      owner {
        lastName
        firstName
        image
        allStar
        rating
        totalTrips
      }
      trips {
        rating
        review
        endDate
        user {
          firstName
        }
      }
    }
  }
`;

interface Car {
  make: string;
  model: string;
  ppd: number;
  totalTrips: number;
  rating: number;
  address: string;
  image: string[];
  owner: {
    lastName: string;
    firstName: string;
    createdAt: Date;
    image: string;
    allStar: boolean;
    rating: number;
    totalTrips: number;
  };
  trips: {
    rating: number;
    review: string;
    endDate: Date;
    user: {
      firstName: string;
    };
  };
}

const Page: React.FC = () => {
  const params = useParams();
  const [car, setCar] = React.useState<Car>();
  const { loading, error, data } = useQuery(GET_CAR_QUERY, {
    variables: { id: Number(params.id) }, // Replace with the desired car make
  });

  React.useEffect(() => {
    if (!loading) setCar(data.getCarByID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(error, loading, data, params);
  }, [loading, data]);

  return car ? (
    <div id="Container" className="flex flex-col pt-[0.8%]">
      <Carousel images={car.image} />
      <Content details={(({ image, owner, trips, ...o }) => o)(car)} />
      <Host host={car.owner} />
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Page;
