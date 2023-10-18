"use client";
import Image from "next/image";
import React, { useState } from "react";
import Main from "@/components/Main";

export default function Home() {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-2xl font-semibold">
      <div className="mx-auto py-10 max-w-5xl ">
        <div className="flex items-center justify-center">
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <Image
            src="/kinoLogo.png"
            width={100}
            height={100}
            alt="Picture of the author"
            priority={true}
          />
          <h1 className="ml-10">Киновтопку</h1>
        </div>
        <div className="flex justify-evenly mt-10">
          <select
            className="px-3 py-2"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option value="a">1988</option>
            <option value="b">2012</option>
            <option value="c">2022</option>
            <option value="d">2023</option>
          </select>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="a">Comedy</option>
            <option value="b">Dramma</option>
            <option value="c">Horror</option>
            <option value="d">Trash</option>
          </select>
        </div>
        <Main />
      </div>
    </div>
  );
}
