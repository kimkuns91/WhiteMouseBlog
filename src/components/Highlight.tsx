import React from "react";
import { cn } from "@/lib/utils";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("bg-neutral-100 px-1 py-0.5", className)}>
      {children}
    </span>
  );
};
