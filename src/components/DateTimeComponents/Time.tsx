"use client";
import { useGlobalContext } from "@/app/context/store";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface PageProps {
  onChange: (time: string) => void;
  type: string;
}

const TimeSelector: React.FC<PageProps> = ({ onChange, type }) => {
  const [showTimeOptions, setShowTimeOptions] = React.useState(false);
  const { pickUpTime, returnTime, setPickUpTime, setReturnTime } =
    useGlobalContext();

  React.useEffect(() => {
    const pickUpTime = localStorage.getItem("pickUpTime");
    const returnTime = localStorage.getItem("returnTime");
    if (pickUpTime) {
      setPickUpTime(JSON.parse(pickUpTime)); // Parse the JSON string
    }
    if (returnTime) {
      setReturnTime(JSON.parse(returnTime)); // Parse the JSON string
    }
  }, []);

  const toggleTimeSelector = () => {
    setShowTimeOptions(!showTimeOptions);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
    setShowTimeOptions(false); // Close the select after selecting an option
  };

  return (
    <div className="rounded-lg font-sans text-[14px] flex flex-row justify-between w-full mx-2">
      <div className="flex relative">
        <select
          value={type !== "return" ? pickUpTime : returnTime}
          className="bg-transparent appearance-none outline-none mr-1"
          onChange={handleSelectChange}
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
