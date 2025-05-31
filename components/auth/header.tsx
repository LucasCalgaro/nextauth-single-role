import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label?: string;
  title?: ReactNode;
}

export const Header = ({ label, title = "Auth" }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1>
      {label && <p className="text-muted-foreground text-sm">{label}</p>}
    </div>
  );
};
