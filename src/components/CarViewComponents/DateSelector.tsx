import React from "react";
import TimeSelector from "../DateTimeComponents/Time";
import { IoIosArrowDown } from "react-icons/io";

interface DateSelectorProps {
  selectedDate: string;
  selectedReturnDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  setSelectedReturnDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  selectedReturnDate,
  setSelectedDate,
  setSelectedReturnDate,
}) => {
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isReturnDate: boolean = false
  ) => {
    const { value } = e.target;
    if (isReturnDate) {
      setSelectedReturnDate(value);
    } else {
      setSelectedDate(value);
    }
  };

  return (
    <div id="DatePicker" className="flex flex-col">
      <div className="flex flex-col justify-start cursor-pointer mb-4">
        <div className="text-[#593CFB] font-light font-sans">Trip Start</div>
        <div className="flex flex-row h-[33px] text-xs border-[0.5px] bg-transparent items-center">
          <div className="flex flex-row justify-between items-center h-full w-3/4 px-2">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="appearance-none"
            />
            <IoIosArrowDown />
          </div>

          <div className="flex flex-row justify-evenly items-center h-full w-1/4 border-l-[1px]">
            <TimeSelector />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start cursor-pointer">
        <div className="text-[#593CFB] font-light font-sans">Trip End</div>
        <div className="flex flex-row h-[33px] text-xs border-[0.5px] bg-transparent items-center">
          <div className="flex flex-row justify-between items-center h-full w-3/4 px-2">
            <input
              type="date"
              value={selectedReturnDate}
              onChange={handleDateChange}
            />
            <IoIosArrowDown />
          </div>

          <div className="flex flex-row justify-evenly items-center h-full w-1/4 border-l-[1px]">
            <TimeSelector />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
