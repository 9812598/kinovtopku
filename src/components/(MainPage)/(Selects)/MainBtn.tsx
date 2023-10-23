"use client";

import React from "react";
import { useGlobalContext } from "@/context/TemeContext";

export default function MainBtn() {
  const { setGenre, setYear } = useGlobalContext();

  return (
    <button
      className="bg-white px-5"
      onClick={() => {
        setGenre("");
        setYear(0);
      }}
    >
      Show all
    </button>
  );
}
