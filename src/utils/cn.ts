import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { ClassValue } from "class-variance-authority/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
