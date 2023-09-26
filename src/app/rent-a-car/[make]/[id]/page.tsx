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
import Header from "@/components/CarViewComponents/Header";

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
    <div id="Container" className="flex flex-col text-black">
      <Carousel images={car.image} />
      <div className="mx-4 lg:mx-[8%]">
        {/* MOBILE VIEW */}
        <div className="flex flex-col md:hidden">
          <Header
            trips={car.totalTrips}
            model={car.model}
            make={car.make}
            rating={car.rating}
          />
          <Content details={(({ image, owner, trips, ...o }) => o)(car)} />
          <Host host={car.owner} />
          <Reviews trips={car.trips} />
        </div>

        {/* MEDIUM VIEW */}
        <div className="hidden md:flex md:flex-row md:justify-center">
          <div>
            <Header
              trips={car.totalTrips}
              model={car.model}
              make={car.make}
              rating={car.rating}
            />
            <Host host={car.owner} />
            <Reviews trips={car.trips} />
          </div>
          <div className="md:w-[320px] flex flex-col mx-[2.5%] md:mt-8">
            <div className="flex flex-col font-sans text-left text-black">
              <div className="font-bold text-sm">
                <span className="line-through mr-1 text-[#9B9B9B] font-thin">
                  ${car.ppd + 15}
                </span>
                ${car.ppd}/day
              </div>
              <div className="underline text-gray-500">
                ${daysRenting * car.ppd} est. total
              </div>
              <div className="w-full border-b-[0.25px] mt-6"></div>
            </div>
            <Content details={(({ image, owner, trips, ...o }) => o)(car)} />
          </div>
        </div>

        {isLoaded && <Map cords={cords} address={car.address} />}
        <FooterSection ppd={car.ppd} daysRenting={daysRenting} />
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Page;
