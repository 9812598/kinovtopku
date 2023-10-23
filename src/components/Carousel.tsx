import React from "react";
import Image from "next/image";

type Props = {};

export default function Carousel({ pics }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {pics.map((pic) => (
        <Image
          src={pic}
          width={200}
          height={200}
          key={pic}
          className="hover:scale-150 duration-300"
          alt="movie screen"
        />
      ))}
    </div>
  );
}
