"use client";
import React from "react";
import Header from "@/components/Checkout/Header";
import { useGlobalContext } from "@/app/context/store";
import Content from "@/components/Checkout/Content";
import Price from "@/components/Checkout/Price";

const Checkout: React.FC = () => {
  const {
    setSelectedCar,
    setDaysRenting,
    setPickUpTime,
    setReturnTime,
    setSelectedDate,
    setSelectedReturnDate,
  } = useGlobalContext();

  React.useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedCar = localStorage.getItem("savedCar");
    const daysRenting = localStorage.getItem("daysRenting");
    const selectedDate = localStorage.getItem("selectedDate");
    const selectedReturnDate = localStorage.getItem("selectedReturnDate");
    const pickUpTime = localStorage.getItem("pickUpTime");
    const returnTime = localStorage.getItem("returnTime");
    if (savedCar) {
      setSelectedCar(JSON.parse(savedCar)); // Parse the JSON string
    }
    if (daysRenting) {
      setDaysRenting(JSON.parse(daysRenting)); // Parse the JSON string
    }
    if (selectedDate) {
      setSelectedDate(JSON.parse(selectedDate)); // Parse the JSON string
    }
    if (selectedReturnDate) {
      setSelectedReturnDate(JSON.parse(selectedReturnDate)); // Parse the JSON string
    }
    if (pickUpTime) {
      setPickUpTime(JSON.parse(pickUpTime)); // Parse the JSON string
    }
    if (returnTime) {
      setReturnTime(JSON.parse(returnTime)); // Parse the JSON string
    }
  }, []);

  return (
    <div className="text-black flex flex-col">
      <Header />
      <Content />
      <Price />
    </div>
  );
};

export default Checkout;
