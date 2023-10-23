"use client";
import MainCards from "@/components/(MainPage)/MainCards";
import MainHeader from "@/components/(MainPage)/MainHeader";
import MainSelects from "@/components/(MainPage)/(Selects)/MainSelects";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/TemeContext";

export default function Home() {
  const [films, setFilms] = useState(null);
  const { year, genre } = useGlobalContext();

  const yearUrl = year ? `Year=${year}` : "";
  const genreUrl = genre ? `Genre=${genre}` : "";
  const urlWithParams = yearUrl ? `${yearUrl}&${genreUrl}` : `${genreUrl}`;

  useEffect(() => {
    fetch(`http://localhost:3004/films?${urlWithParams}`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
  }, [year, genre]);

  if (!films) return <p>No films data</p>;

  return (
    <>
      <MainHeader />
      <MainSelects />
      <MainCards films={films} />
    </>
  );
}
