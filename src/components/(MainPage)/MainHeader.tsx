import React from "react";
import Image from "next/image";

type Props = {};

export default function MainHeader({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Image
        src="/kinoLogo.png"
        width={100}
        height={100}
        alt="Picture of the kinovtopku"
        priority={true}
      />
      <h1 className="ml-10">Киновтопку</h1>
    </div>
  );
}
