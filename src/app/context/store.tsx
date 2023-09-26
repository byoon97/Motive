"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

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
  const [pickUpTime, setPickUpTime] = useState<string>("");
  const [returnTime, setReturnTime] = useState<string>("");
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
