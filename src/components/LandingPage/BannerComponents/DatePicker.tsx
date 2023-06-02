import React, { useState } from "react";
import TimeSelector from "./Time";

type DatePickerProps = {
  date: string;
};

const DatePicker: React.FC<DatePickerProps> = ({ date }) => {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-col p-2 border-b border-black">
      <div className="text-xs">From</div>
      <div className="flex flex-row justify-start items-center">
        <div className="bg-gray-50 cursor-pointer">
          <div className="w-48">
            <input
              type="date"
              className="rounded px-2 py-1 bg-gray-50"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <TimeSelector />
      </div>
    </div>
  );
};

export default DatePicker;
