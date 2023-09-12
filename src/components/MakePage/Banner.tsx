import React from "react";
import SearchBar from "../BannerComponents/SearchBar";
import { useParams } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

interface Data {
  make: string;
}

const Banner: React.FC<Data> = ({ make }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center sm:pt-6 md:h-[400px] sm:h-[450px] bg-[url('../../public/make/MakeBanner.png')] bg-cover bg-center  border-b-0 bg-no-repeat text-stone-950 border-[1px]">
      <div className="font-bold mb-3 text-xl">
        Discover Motive, the World&apos;s Largest Car Sharing Marketplace
      </div>
      <div className="font-bold text-2xl mb-1">Rent a {make}</div>
      <SearchBar />
      <div className="flex flex-row mt-6 sm:mr-64 md:ml-[500px]">
        <Link href="/">
          <p className="text-xs cursor-pointer">Home</p>
        </Link>
        <BsArrowRightShort />
        <p className="text-xs">{make}</p>
      </div>
    </div>
  );
};

export default Banner;
