import React from "react";
import { IFilm } from "@/types/types";

type Props = {
  urlWithParams: string;
  setFilms: (films: IFilm[]) => void;
};

export default async function MainFetch({ urlWithParams, setFilms }: Props) {
  const res = await fetch(`http://localhost:3004/films?${urlWithParams}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  setFilms(result);
}
