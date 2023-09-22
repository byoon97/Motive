import React from "react";
import { FaStar } from "react-icons/fa";
import DateSelector from "./DateSelector";
import ContentFillter from "./ContentFiller";
import Host from "./Host";

interface CarProps {
  details: {
    make: string;
    model: string;
    ppd: number;
    totalTrips: number;
    rating: number;
    address: string;
  };
}

const Content: React.FC<CarProps> = ({ details: d }) => {
  React.useEffect(() => {}, []);
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedReturnDate, setSelectedReturnDate] = React.useState("");

  React.useEffect(() => {
    // create date for tmrw
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // create date for checkout
    const returnDay = new Date(tomorrow);
    returnDay.setDate(tomorrow.getDate() + 3);

    // format the date
    const year = tomorrow.getFullYear();
    const month = `${tomorrow.getMonth() + 1}`.padStart(2, "0");
    const day = `${tomorrow.getDate()}`.padStart(2, "0");
    const formattedReturnDate = `${returnDay.getDate()}`.padStart(2, "0");
    const tomorrowFormattedDate = `${year}-${month}-${day}`;

    // format the return date
    const threeDaysFormattedDate = `${year}-${month}-${formattedReturnDate}`;

    // set the dates
    setSelectedDate(tomorrowFormattedDate);
    setSelectedReturnDate(threeDaysFormattedDate);
  }, []);

  return (
    <div className="text-black mt-[5%]">
      <DateSelector
        selectedDate={selectedDate}
        selectedReturnDate={selectedReturnDate}
        setSelectedDate={setSelectedDate}
        setSelectedReturnDate={setSelectedReturnDate}
      />
      <div className="w-full border-b-[0.25px] mt-6"></div>
      <ContentFillter address={d.address} />
      <div className="w-full border-b-[0.25px] mt-6"></div>
    </div>
  );
};

export default Content;
