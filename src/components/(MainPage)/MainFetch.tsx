import React from "react";
import { IFilm } from "@/types/types";

type Props = {
  urlWithParams: string;
  setFilms: (films: IFilm[]) => void;
};

async function getData({ urlWithParams, setFilms }: Props) {
  const res = await fetch(`http://localhost:3004/films?${urlWithParams}`)
    .then((res) => res.json())
    .then((data) => {
      setFilms(data);
    });
  return 25;
}

export default async function MainFetch({ urlWithParams, setFilms }: Props) {
  let myNumb = await getData({ urlWithParams, setFilms });

  return <h3>{myNumb}</h3>;
}
