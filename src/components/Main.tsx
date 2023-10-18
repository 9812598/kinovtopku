import React from "react";
import MainCard from "./MainCard";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
    </div>
  );
}
