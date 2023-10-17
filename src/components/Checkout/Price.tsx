/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/app/context/store";

const Price: React.FC = () => {
  const { selectedCar, daysRenting } = useGlobalContext();
  const [price, setPrice] = React.useState(0);

  useEffect(() => {
    selectedCar &&
      setPrice(
        selectedCar?.ppd * daysRenting +
          (selectedCar?.ppd * daysRenting) / 3.5 +
          (selectedCar?.ppd * daysRenting) / 4 -
          (selectedCar?.ppd / 10) * daysRenting -
          (selectedCar?.ppd * daysRenting) / 20
      );
  }, []);

  return (
    <div className="mx-4 flex flex-col color-black mt-6 font-light">
      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>
          ${selectedCar?.ppd} x {daysRenting} days
        </div>
        <div>${selectedCar ? selectedCar?.ppd * daysRenting : null}</div>
      </div>

      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>Trip Fee</div>
        <div>
          $
          {selectedCar
            ? ((selectedCar?.ppd * daysRenting) / 3.5).toFixed(2)
            : null}
        </div>
      </div>

      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>Standard protection</div>
        <div>
          $
          {selectedCar
            ? ((selectedCar?.ppd * daysRenting) / 4).toFixed(2)
            : null}
        </div>
      </div>

      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>{daysRenting * 200} total miles</div>
        <div className="text-[#5FA98E]">FREE</div>
      </div>

      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>3+ day discount</div>
        <div className="text-[#5FA98E]">
          -${selectedCar ? (selectedCar?.ppd / 10) * daysRenting : null}
        </div>
      </div>

      <div className="flex flex-row justify-between mb-4 text-sm">
        <div>Early bird discount</div>
        <div className="text-[#5FA98E]">
          -${selectedCar ? (selectedCar?.ppd * daysRenting) / 20 : null}
        </div>
      </div>
      <div className="w-full border-b-[0.25px] border-[#C7C7C7]"></div>
      <div className="flex flex-row justify-between mb-4 text-sm mt-4">
        <div>Total Price</div>
        <div>${price.toFixed(2)}</div>
      </div>
      <div className="w-full border-b-[0.25px] border-[#C7C7C7]"></div>
      <div className="font-sans text-xs mt-4">
        You'll be able to message {selectedCar?.owner.firstName} after checkout
      </div>
      <button className="bg-[#593cfb] border-[1px] text-white w-[131px] h-[34px] mt-4">
        <div className="cursor-pointer font-sans font-bold text-center ">
          Book this trip
        </div>
      </button>
    </div>
  );
};
export default Price;
