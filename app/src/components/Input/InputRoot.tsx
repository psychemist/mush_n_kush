import React, { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function InputRoot({ children, ...rest }: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex items-center rounded-lg bg-gray-50 px-1 focus-within:bg-transparent focus-within:ring-2 focus-within:ring-gray-100 focus:bg-transparent",
        rest.className
      )}
    >
      {children}
    </div>
  );
}
