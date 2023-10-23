"use client";

import React from "react";
import { useGlobalContext } from "@/context/TemeContext";

export default function MainSelectGare({ genreSetAll }) {
  const genreAll = [...genreSetAll];
  const { genre, setGenre } = useGlobalContext();

  return (
    <select
      className="px-3 py-2"
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
