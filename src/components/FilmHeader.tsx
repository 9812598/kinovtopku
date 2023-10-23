import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function FilmHeader({}: Props) {
  return (
    <Link href="/">
      <div className="flex items-center justify-center">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Image
          src="/svg/film-camera-svgrepo-com.svg"
          width={100}
          height={100}
          alt="Picture of the kinovtopku in svg format"
          priority={true}
        />
        <h1 className="ml-10">Киновтопку</h1>
      </div>
    </Link>
  );
}
