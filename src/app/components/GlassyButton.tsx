"use client";

import React, { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function GlassyButton({ children }: Props) {
  return (
    <div className="relative rounded-full bg-gradient-to-br from-gray-400 via-[#2f133b50] to-gray-400 p-[1px] flex-shrink-0 w-fit">
      {children}
    </div>
  );
}
