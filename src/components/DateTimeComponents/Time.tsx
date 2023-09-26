"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface PageProps {
  onChange: (time: string) => void;
}

const TimeSelector: React.FC<PageProps> = ({ onChange }) => {
  const [showTimeOptions, setShowTimeOptions] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState("10:00 AM"); // Set your default time here

  const toggleTimeSelector = () => {
    setShowTimeOptions(!showTimeOptions);
  };

  const handleTimeChange = (newTime: string) => {
    setSelectedTime(newTime);
    onChange(newTime);
    setShowTimeOptions(false); // Hide the time options when a selection is made
  };

  return (
    <div className="rounded-lg font-sans text-[14px] flex flex-row justify-between w-full mx-2">
      <div className="flex relative">
        <select
          value={selectedTime}
          onClick={() => setShowTimeOptions(!showTimeOptions)} // Toggle options on click
          className="bg-transparent appearance-none outline-none mr-1"
        >
          <option value="08:00 AM">08:00 AM</option>
          <option value="08:30 AM">08:30 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="09:30 AM">09:30 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="10:30 AM">10:30 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="11:30 AM">11:30 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="01:30 PM">01:30 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="02:30 PM">02:30 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="03:30 PM">03:30 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="04:30 PM">04:30 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="05:30 PM">05:30 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="06:30 PM">06:30 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="07:30 PM">07:30 PM</option>
          <option value="08:00 PM">08:00 PM</option>
          <option value="08:30 PM">08:30 PM</option>
          <option value="09:00 PM">09:00 PM</option>
          <option value="09:30 PM">09:30 PM</option>
          <option value="10:00 PM">10:00 PM</option>
          <option value="10:30 PM">10:30 PM</option>
          <option value="11:00 PM">11:00 PM</option>
          <option value="11:30 PM">11:30 PM</option>
          <option value="12:00 AM">12:00 AM</option>
          <option value="12:30 AM">12:30 AM</option>
          <option value="01:00 AM">01:00 AM</option>
          {/* Add more options as needed */}
        </select>
        {showTimeOptions && (
          <div className="absolute z-10 mt-1 py-2 w-28 bg-white border border-gray-300 shadow-lg">
            {/* Additional options with 30-minute intervals */}
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("08:00 AM")}
            >
              08:00 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("08:30 AM")}
            >
              08:30 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("09:00 AM")}
            >
              09:00 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("09:30 AM")}
            >
              09:30 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("10:00 AM")}
            >
              10:00 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover:bg-gray-200"
              onClick={() => handleTimeChange("10:30 AM")}
            >
              10:30 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("11:00 AM")}
            >
              11:00 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("11:30 AM")}
            >
              11:30 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("12:00 PM")}
            >
              12:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("12:30 PM")}
            >
              12:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("01:00 PM")}
            >
              01:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("01:30 PM")}
            >
              01:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("02:00 PM")}
            >
              02:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("02:30 PM")}
            >
              02:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("03:00 PM")}
            >
              03:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("03:30 PM")}
            >
              03:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("04:00 PM")}
            >
              04:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("04:30 PM")}
            >
              04:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("05:00 PM")}
            >
              05:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("05:30 PM")}
            >
              05:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("06:00 PM")}
            >
              06:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("06:30 PM")}
            >
              06:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("07:00 PM")}
            >
              07:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("07:30 PM")}
            >
              07:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("08:00 PM")}
            >
              08:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("08:30 PM")}
            >
              08:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("09:00 PM")}
            >
              09:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("09:30 PM")}
            >
              09:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("10:00 PM")}
            >
              10:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("10:30 PM")}
            >
              10:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("11:00 PM")}
            >
              11:00 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("11:30 PM")}
            >
              11:30 PM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("12:00 AM")}
            >
              12:00 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("12:30 AM")}
            >
              12:30 AM
            </option>
            <option
              className="cursor-pointer px-2 py-1 hover-bg-gray-200"
              onClick={() => handleTimeChange("01:00 AM")}
            >
              01:00 AM
            </option>
          </div>
        )}
      </div>
      <IoIosArrowDown
        onClick={toggleTimeSelector}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default TimeSelector;
