import React from "react";
import MainCard from "./MainCard";

export default function MainCards({ films }) {
  if (!films) return <p>No films data</p>;

  return (
    <div className="grid gap-4 mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {films.map((film) => (
        <MainCard film={film} key={film.title} />
      ))}
    </div>
  );
}
