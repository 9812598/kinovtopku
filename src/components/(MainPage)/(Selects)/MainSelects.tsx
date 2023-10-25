import React from "react";
import MainSelectGare from "./MainSelectGare";
import MainSelectYear from "./MainSelectYear";
import MainBtn from "./MainBtn";
import { IFilm } from "@/types/types";

async function getAllFilms():Promise<IFilm[]> {
  const res = await fetch(`http://localhost:3004/films`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function MainSelects() {
  const films = await getAllFilms();

  const yearSetAll: Set<number> = new Set(films.map((a) => a.Year));
  const genreSetAll: Set<string> = new Set(films.map((a) => a.Genre));

  return (
    <div className="flex justify-evenly mt-10">
      <MainSelectYear yearSetAll={yearSetAll} />
      <MainBtn />
      <MainSelectGare genreSetAll={genreSetAll} />
    </div>
  );
}
