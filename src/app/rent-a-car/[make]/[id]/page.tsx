/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Carousel from "@/components/CarViewComponents/Carousel";
import Content from "@/components/CarViewComponents/Content";
import Host from "@/components/CarViewComponents/Host";
import Reviews from "@/components/CarViewComponents/Reviews";
import { useGlobalContext } from "@/app/context/store";
import FooterSection from "@/components/CarViewComponents/FooterSection";
import Map from "@/components/CarViewComponents/Map";
import { useLoadScript } from "@react-google-maps/api";

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
        createdAt
      }
      trips {
        rating
        review
        endDate
        user {
          firstName
          image
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
  trips: Trip[];
}

interface Trip {
  rating: number;
  review: string;
  endDate: Date;
  user: {
    firstName: string;
    image: string;
  };
}

const Page: React.FC = () => {
  const params = useParams();
  const [car, setCar] = React.useState<Car>();
  const { loading, error, data } = useQuery(GET_CAR_QUERY, {
    variables: { id: Number(params.id) }, // Replace with the desired car make
  });
  const { daysRenting } = useGlobalContext();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [cords, setCords] = React.useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  React.useEffect(() => {
    if (!loading) setCar(data.getCarByID);
    if (car) {
      const address = car.address;
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (
          status === "OK" &&
          results &&
          results.length > 0 &&
          results[0]?.geometry?.location
        ) {
          const { lat, lng } = results[0].geometry.location;
          setCords({ lat: Number(lat()), lng: Number(lng()) });
        } else {
          console.error("Geocoding failed or no results found.");
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(isLoaded);
  }, [loading, data, car]);

  return car ? (
    <div id="Container" className="flex flex-col pt-[0.8%]">
      <Carousel images={car.image} />
      <Content details={(({ image, owner, trips, ...o }) => o)(car)} />
      <Host host={car.owner} />
      <Reviews trips={car.trips} />
      <FooterSection ppd={car.ppd} daysRenting={daysRenting} />
      {isLoaded && (
        <div className="mx-2 rounded-lg mt-10">
          <Map cords={cords} address={car.address} />
        </div>
      )}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Page;
