import React from "react";
import DatePicker from "./DatePicker";
import { currentDateWithoutTime } from "@/functions/date";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="flex mt-4 bg-gray-50 md:flex-row md:w-[585px] md:rounded-[95px] md:h-[50px] sm:h-[225px] sm:flex-col sm:rounded-[10px] sm:w-[400px] shadow-md">
      <div className="flex flex-col sm:p-1.5 md:pt-2 md:pl-4 md:border-r">
        <div className="text-xs">Where</div>
        <div className="flex flex-row justify-start items-center sm:border-b md:border-none">
          <input
            className="bg-gray-50 text-sm focus:ring-0 sm:mt-1.5 cursor-pointer bg-transparent border-none"
            placeholder="City, airport, address"
          ></input>
        </div>
      </div>
      <div className="flex flex-col sm:p-1.5 md:pt- md:border-r">
        <div className="text-xs">From</div>
        <DatePicker date={currentDateWithoutTime} />
      </div>
      <div className="flex flex-col sm:p-1.5 md:pt-2">
        <div className="text-xs">Until</div>
        <DatePicker date={currentDateWithoutTime} />
      </div>
      <div className="hidden md:flex items-center mt-2 justify-center h-[35px] rounded-[100px] bg-indigo-600">
        <BsSearch className="text-gray-50 w-[35px] h-auto scale-75" />
      </div>
      <div className="md:hidden flex items-center justify-center pt-1 px-2.5 rounded-[100px]">
        <button className="h-10  w-full bg-indigo-600 text-gray-50">
          Search for Cars
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
