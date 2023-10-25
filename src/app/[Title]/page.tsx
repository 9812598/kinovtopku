import React from "react";
import FilmHeader from "@/components/FilmHeader";
import Image from "next/image";
import Carousel from "@/components/Carousel";

async function getFilmByTitle(params: { Title: string }) {
  const title = params.Title.replaceAll("_", "%20");
  const res = await fetch(`http://localhost:3004/films?Title=${title}`);
  if (!res.ok) {
    throw new Error("Failed to fetch film by Title");
  }
  return res.json();
}

export default async function Film({ params }) {
  const [film] = await getFilmByTitle(params);

  return (
    <div className="flex flex-col gap-6 px-3">
      <FilmHeader />
      <Image
        src={film.Poster}
        width={225}
        height={338}
        alt="Avatar of the film"
        priority={false}
        className="h-auto w-auto hover:bg-sky-700 hover:shadow-xl opacity-80 hover:opacity-100 duration-300 rounded-lg mt-5 self-center"
      />
      <h1>{film.Title}</h1>
      <h2 className="font-normal">{film.Plot}</h2>
      <p className="font-normal">
        Director: {film.Director} <br />
        Actors: {film.Actors}
      </p>
      <Carousel pics={film.Images} />
    </div>
  );
}
