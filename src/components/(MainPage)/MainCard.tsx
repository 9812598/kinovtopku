"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IFilm } from "@/types/types";

export default function MainCard({ film }: IFilm) {
  return (
    <>
      <Link href={film.Title.replaceAll(" ", "_")}>
        <div className="flex flex-col gap-3 border-cyan-500 border-solid border-2 rounded-lg px-5 py-3 items-center bg-slate-300 hover:bg-slate-400 ">
          <h3 className="line-clamp-1">{film.Title}</h3>
          <h4 className="text-base">{film.Released}</h4>
          <p className="font-normal text-base line-clamp-3">{film.Plot}</p>
          <div className="w-9/12 h-56 relative">
            <Image
              src={film.Poster}
              fill
              alt="{film.Title}"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
