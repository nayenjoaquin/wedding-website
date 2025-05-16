"use client";

interface Props {
  children: React.ReactNode;
  id: string;
}

export const ReferenceSubtitle = ({ children, id }: Props) => {
  

  return (
    <div className="subtitle highlight w-fit mt-[var(--nav-height)]" id={id}>
      {children}
    </div>
  );
};
