import React, { useEffect, useRef, useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { HiOutlineHome } from "react-icons/hi";

interface PageProps {
  address: string;
  cords: {
    lat: number;
    lng: number;
  };
}

const Map: React.FC<PageProps> = ({ address, cords }) => {
  const grayscaleMapStyles = [
    {
      elementType: "geometry",
      stylers: [
        {
          saturation: -100, // Make it grayscale
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off", // Turn off points of interest (landmark pins)
        },
      ],
    },
  ];

  const mapOptions = {
    styles: grayscaleMapStyles,
    disableDefaultUI: true, // Remove default UI controls
    gestureHandling: "none", // Disable user interactions (pan, zoom, etc.)
    zoomControl: false, // Remove zoom control
    draggable: false, // Make it non-draggable
    scrollwheel: false, // Disable scrolling to zoom
  };
  return (
    <div className="w-full h-[300px] md:h-[500px] mt-12 flex flex-col border-[1px] shadow-lg rounded-lg">
      <GoogleMap
        zoom={12}
        center={cords}
        mapContainerClassName="map-container"
        options={mapOptions}
      >
        <Marker position={cords} />
      </GoogleMap>

      <div className="flex flex-col items-start text-black font-sans my-6 mx-2">
        <div className="text-xs mb-3 font-bold text-gray-600">
          PICKUP AT CAR LOCATION
        </div>
        <div className="text-[14.5px] flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <HiOutlineHome color={"#593CFB"} className="mr-2 mt-[1.3px]" />
            {address.split(",")[1]}, {address.split(",")[2]}
          </div>
          <div className="text-xs font-bold flex items-center justify-center mr-2">
            FREE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
