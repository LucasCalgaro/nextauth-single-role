import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Collumn = ({ children, className, ...props }: RowProps) => {
  return (
    <div {...props} className={cn("flex flex-col gap-2", className)}>
      {children}
    </div>
  );
};

export default Collumn;
