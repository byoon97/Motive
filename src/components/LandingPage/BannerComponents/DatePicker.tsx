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
    <div className="flex flex-row justify-start items-center sm:border-b md:border-none">
      <div className="bg-gray-50 cursor-pointer">
        <input
          type="date"
          className="rounded bg-gray-50 h-[30px] text-xs"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <TimeSelector />
    </div>
  );
};

export default DatePicker;
