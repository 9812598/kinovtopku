import { IFilm } from "@/types/types";

type Props = {
  urlWithParams: string;
  setFilms: (films: IFilm[]) => void;
};

async function getData({ urlWithParams, setFilms }: Props) {
  const res = await fetch(`http://localhost:3004/films?${urlWithParams}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function MainFetch2() {
  const data = await getData();

  return <main></main>;
}
