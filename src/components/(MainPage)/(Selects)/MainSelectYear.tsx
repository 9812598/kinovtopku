"use client";

import React from "react";
import { useGlobalContext } from "@/context/TemeContext";

type Props = {};

export default function MainSelectYear({ yearSetAll }: Props) {
  const yearAll = [...yearSetAll];
  const { year, setYear } = useGlobalContext();

  return (
    <select
      className="px-3 py-2"
      onChange={(e) => {
        setYear(e.target.value);
      }}
    >
      {yearAll.map((myYear) => (
        <option value={myYear} key={myYear}>
          {myYear}
        </option>
      ))}
    </select>
  );
}
