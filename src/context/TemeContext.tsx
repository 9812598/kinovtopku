"use client";
import { IFilm } from "@/types/types";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  genre: string;
  setGenre: Dispatch<SetStateAction<string>>;
  films?: IFilm[] | null;
  setFilms?: Dispatch<SetStateAction<IFilm[]>>;
}

const GlobalContext = createContext<ContextProps>({
  year: 0,
  setYear: (): number => 0,
  genre: "",
  setGenre: (): string => "",
  films: null,
  setFilms: (): IFilm[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState("");

  return (
    <GlobalContext.Provider value={{ year, setYear, genre, setGenre }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
