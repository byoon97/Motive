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
}

const GlobalContext = createContext<ContextProps>({
  daysRenting: 3,
  setDaysRenting: (): number => 3,
});

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [daysRenting, setDaysRenting] = useState(3);

  return (
    <GlobalContext.Provider value={{ daysRenting, setDaysRenting }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
