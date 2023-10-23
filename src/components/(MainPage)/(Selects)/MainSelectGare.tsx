"use client";

import React, { ReactNode } from "react";
import { useGlobalContext } from "@/context/TemeContext";

interface Props {
  children?: ReactNode;
}

export default function MainSelectGare({ genreSetAll }: Props) {
  const genreAll = [...genreSetAll];
  const { genre, setGenre } = useGlobalContext();

  return (
    <select
      className="px-3 py-2"
      value={genre}
      onChange={(e) => {
        setGenre(e.target.value);
      }}
    >
      {genreAll.map((myGenre) => (
        <option value={myGenre} key={myGenre}>
          {myGenre}
        </option>
      ))}
    </select>
  );
}
