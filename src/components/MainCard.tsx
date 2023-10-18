import React from "react";

type Props = {};

export default function MainCard({}: Props) {
  return (
    <>
      <div className="flex flex-col gap-3 border-cyan-500 border-solid border-2 rounded-lg px-5 py-3 items-center bg-slate-300 hover:bg-slate-400 ">
        <h2>Name of the film</h2>
        <h4 className="text-base">26.11.1988</h4>
        <p className="font-normal text-base">Краткое описание ascasc ascasc</p>
      </div>
    </>
  );
}
