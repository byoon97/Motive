"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface Car {
  make: string;
  model: string;
  ppd: number;
  totalTrips: number;
  rating: number;
  address: string;
  image: string[];
  owner: {
    lastName: string;
    firstName: string;
    createdAt: Date;
    image: string;
    allStar: boolean;
    rating: number;
    totalTrips: number;
  };
}

interface ContextProps {
  daysRenting: number;
  setDaysRenting: Dispatch<SetStateAction<number>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  selectedReturnDate: Date;
  setSelectedReturnDate: Dispatch<SetStateAction<Date>>;
  pickUpTime: string;
  setPickUpTime: Dispatch<SetStateAction<string>>;
  returnTime: string;
  setReturnTime: Dispatch<SetStateAction<string>>;
  selectedCar: Car | void;
  setSelectedCar: Dispatch<SetStateAction<Car | void>>;
}

const GlobalContext = createContext<ContextProps>({
  daysRenting: 3,
  setDaysRenting: (): number => 3,
  selectedDate: new Date(),
  setSelectedDate: (): Date => new Date(),
  selectedReturnDate: new Date(),
  setSelectedReturnDate: (): Date => new Date(),
  pickUpTime: "",
  setPickUpTime: (): string => "",
  returnTime: "",
  setReturnTime: (): string => "",
  selectedCar: {
    make: "",
    model: "",
    ppd: 0,
    totalTrips: 0,
    rating: 0,
    address: "",
    image: [],
    owner: {
      lastName: "",
      firstName: "",
      createdAt: new Date(),
      image: "",
      allStar: false,
      rating: 0,
      totalTrips: 0,
    },
  },
  setSelectedCar: (): void => {},
});

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [daysRenting, setDaysRenting] = useState(3);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedReturnDate, setSelectedReturnDate] = useState<Date>(
    new Date()
  );
  const [pickUpTime, setPickUpTime] = useState<string>("10:00 AM");
  const [returnTime, setReturnTime] = useState<string>("10:00 AM");
  const [selectedCar, setSelectedCar] = useState<Car | void>();

  React.useEffect(() => {
    // Save data to localStorage whenever selectedCar changes
    if (selectedCar) {
      localStorage.setItem("savedCar", JSON.stringify(selectedCar)); // Convert to JSON string
    }
    if (daysRenting) {
      localStorage.setItem("daysRenting", JSON.stringify(daysRenting)); // Convert to JSON string
    }
    if (selectedDate) {
      localStorage.setItem("selectedDate", JSON.stringify(selectedDate)); // Convert to JSON string
    }
    if (selectedReturnDate) {
      localStorage.setItem(
        "selectedReturnDate",
        JSON.stringify(selectedReturnDate)
      ); // Convert to JSON string
    }
    if (pickUpTime) {
      localStorage.setItem("pickUpTime", JSON.stringify(pickUpTime)); // Convert to JSON string
    }
    if (returnTime) {
      localStorage.setItem("returnTime", JSON.stringify(returnTime)); // Convert to JSON string
    }
  }, [
    daysRenting,
    pickUpTime,
    returnTime,
    selectedCar,
    selectedDate,
    selectedReturnDate,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        daysRenting,
        setDaysRenting,
        selectedDate,
        setSelectedDate,
        selectedReturnDate,
        setSelectedReturnDate,
        pickUpTime,
        setPickUpTime,
        returnTime,
        setReturnTime,
        selectedCar,
        setSelectedCar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
