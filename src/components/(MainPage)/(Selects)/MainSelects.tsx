import React from "react";
import MainSelectGare from "./MainSelectGare";
import MainSelectYear from "./MainSelectYear";

type Props = {};

async function getAllFilms() {
  const res = await fetch(`http://localhost:3004/films`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function MainSelects({}: Props) {
  const films = await getAllFilms();

  const yearSetAll = new Set(films.map((a) => a.Year));
  const genreSetAll = new Set(films.map((a) => a.Genre));

  return (
    <div className="flex justify-evenly mt-10">
      <MainSelectYear yearSetAll={yearSetAll} />
      <MainSelectGare genreSetAll={genreSetAll} />
    </div>
  );
}
