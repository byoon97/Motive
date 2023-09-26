import React from "react";
import TimeSelector from "../DateTimeComponents/Time";
import { IoIosArrowDown } from "react-icons/io";
import { useGlobalContext } from "@/app/context/store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector: React.FC = () => {
  const {
    setSelectedDate,
    selectedDate,
    setSelectedReturnDate,
    selectedReturnDate,
    setDaysRenting,
    setPickUpTime,
    setReturnTime,
  } = useGlobalContext();

  const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);
  const [isReturnDatePickerVisible, setReturnDatePickerVisible] =
    React.useState(false);

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };
  const toggleReturnDatePicker = () => {
    setReturnDatePickerVisible(!isReturnDatePickerVisible);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    // Calculate the date 3 days from the selected date
    const threeDaysLater = new Date(date);
    threeDaysLater.setDate(threeDaysLater.getDate() + 3);
    setSelectedReturnDate(threeDaysLater);
  };

  function calculateDateDifference(startDateStr: Date, endDateStr: Date) {
    // Convert the input date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const oneDay = 24 * 60 * 60 * 1000;
    const startDateTimestamp = startDate.getTime();
    const endDateTimestamp = endDate.getTime();
    const daysDifference = Math.round(
      Math.abs((endDateTimestamp - startDateTimestamp) / oneDay)
    );

    return daysDifference;
  }

  React.useEffect(() => {
    setDaysRenting(calculateDateDifference(selectedDate, selectedReturnDate));
  }, [selectedDate, selectedReturnDate, setDaysRenting]);

  return (
    <div id="DatePicker" className="flex flex-col font-sans">
      <div className="flex flex-col justify-start cursor-pointer mb-4">
        <div className="text-[#593CFB] font-light font-sans">Trip Start</div>
        <div className="flex flex-row h-[33px] text-xs border-[0.5px] bg-transparent items-center">
          <div className="hover:border-[#593CFB] border relative flex flex-row justify-between items-center h-full w-3/4 px-2">
            <DatePicker
              readOnly
              minDate={selectedDate}
              selected={selectedDate}
              onChange={handleDateChange}
              className="text-[14px]"
              open={isDatePickerVisible} // Control calendar visibility
            />
            <IoIosArrowDown
              onClick={toggleDatePicker}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          <div className="hover:border-[#593CFB] border flex flex-row justify-evenly items-center h-full w-1/4 p-2">
            <TimeSelector onChange={setPickUpTime} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start cursor-pointer">
        <div className="text-[#593CFB] font-light font-sans">Trip End</div>
        <div className="flex flex-row h-[33px] text-xs border-[0.5px] bg-transparent items-center">
          <div className="hover:border-[#593CFB] border relative flex flex-row justify-between items-center h-full w-3/4 px-2">
            <DatePicker
              readOnly
              selected={selectedReturnDate}
              onChange={(date) => {
                setSelectedReturnDate(date as Date);
              }}
              open={isReturnDatePickerVisible}
              className="text-[14px]"
            />
            <IoIosArrowDown
              onClick={toggleReturnDatePicker}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          <div className="hover:border-[#593CFB] border flex flex-row justify-evenly items-center h-full w-1/4 p-2">
            <TimeSelector onChange={setReturnTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
