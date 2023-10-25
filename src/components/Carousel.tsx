import React from "react";
import Image from "next/image";

type Props = {
  pics: string[];
};

export default function Carousel({ pics }: Props) {
  return (
    <div className="self-center grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {pics.map((pic) => (
        <Image
          src={pic}
          width={200}
          height={200}
          key={pic}
          className="h-auto w-auto hover:scale-150 duration-300"
          alt="movie screen"
        />
      ))}
    </div>
  );
}
