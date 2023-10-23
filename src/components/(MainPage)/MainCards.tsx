import React from "react";
import MainCard from "./MainCard";

export default function MainCards({ films }) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {films.map((film) => (
        <MainCard film={film} key={film.title} />
      ))}
    </div>
  );
}
