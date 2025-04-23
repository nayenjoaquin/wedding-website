"use client";

import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  id: string;
}

export const ReferenceSubtitle = ({ children, id }: Props) => {
  

  return (
    <div className="subtitle highlight w-fit" id={id}>
      {children}
    </div>
  );
};
