"use client";

import React from "react";
import { useGlobalContext } from "@/context/TemeContext";

interface Props {
  yearSetAll: Set<number>;
}

export default function MainSelectYear({ yearSetAll }: Props) {
  const yearAll = [...yearSetAll];
  const { year, setYear } = useGlobalContext();

  const onChangeHanler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setYear(+e.target.value);
  };

  return (
    <select className="px-3 py-2" onChange={onChangeHanler} value={year}>
      {yearAll.map((myYear) => (
        <option value={myYear} key={myYear}>
          {myYear}
        </option>
      ))}
    </select>
  );
}
