﻿import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <svg className="animate-spin h-40 w-40 mr-3" viewBox="0 0 24 24">
        <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
      </svg>
    </div>
  );
}
