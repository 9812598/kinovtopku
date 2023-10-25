"use client";

import React from "react";
import { useGlobalContext } from "@/context/TemeContext";

interface Props {
  genreSetAll: Set<string>;
}

export default function MainSelectGare({ genreSetAll }: Props) {
  const genreAll = [...genreSetAll];
  const { genre, setGenre } = useGlobalContext();
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setGenre(e.target.value);
  };

  return (
    <select className="px-3 py-2" value={genre} onChange={onChangeHandler}>
      {genreAll.map((myGenre) => (
        <option value={myGenre} key={myGenre}>
          {myGenre}
        </option>
      ))}
    </select>
  );
}
