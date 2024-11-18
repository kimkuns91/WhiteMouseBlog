import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}